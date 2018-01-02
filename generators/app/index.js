'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');
const mkdirp = require('mkdirp');

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
        filter: _.kebabCase
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
  }
  _writePackage(extendPkg) {
    this.fs.writeJSON(
      this.destinationPath('package.json'),
      extendPkg(this.fs.readJSON(this.destinationPath('package.json'), {}))
    );
  }
  Writing() {
    this._writePackage(() => ({
      name: this.props.name,
      description: this.props.description,
      version: '0.0.1',
      main: 'index.js',
      scripts: {
        test: 'echo "Error: no test specified" && exit 1'
      },
      author: '',
      license: 'ISC'
    }));
  }
};
