'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');
const mkdirp = require('mkdirp');

const prefix = 'broker';
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');

updateNotifier({ pkg }).notify();

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        'Welcome to the splendid ' + chalk.red('generator-paas-component') + ' generator!'
      )
    );

    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: "please input your component's name",
        default: '',
        filter: name => {
          name = _.kebabCase(name);
          if (!_.startsWith(name, prefix)) {
            name = `${prefix}-${name}`;
          }
          return name;
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'please input your description',
        default: ''
      }
    ]).then(props => {
      this.props = props;
    });
  }
  default() {
    this.log(
      `Your project must be inside a folder named 
        ${this.props.name}
        \nI'll automatically create this folder.`
    );
    mkdirp(this.props.name);
    this.destinationRoot(this.destinationPath(this.props.name));
    this.composeWith(require.resolve('../bussness'), {
      name: this.props.name
    });
    this.composeWith(require.resolve('../git'), {
      name: this.props.name
    });
    this.composeWith(require.resolve('../eslint'));
  }
  Writing() {
    this.fs.extendJSON(this.destinationPath('package.json'), {
      name: this.props.name,
      description: this.props.description,
      version: '0.0.1',
      main: 'index.js',
      scripts: {
        test: 'echo "Error: no test specified" && exit 1'
      },
      author: '',
      license: 'ISC'
    });
  }
};
