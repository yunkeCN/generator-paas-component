'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.option('name', {
      type: String,
      required: false,
      defaults: '',
      desc: 'paas id and project name'
    });
  }
  Writing() {
    this.fs.copyTpl(this.templatePath('README.md'), this.destinationPath('README.md'), {
      name: this.options.name
    });
  }
};
