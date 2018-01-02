'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.option('name', {
      type: String,
      required: true,
      desc: 'repositoy name'
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('gitattributes'),
      this.destinationPath('.gitattributes')
    );
    this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'));
    this.pkg = this.fs.readJSON(this.destinationPath('package.json'), {});
    const repository = 'yunke-paas/' + this.options.name;
    this.pkg.repository = this.pkg.repository || repository;
    this.fs.writeJSON(this.destinationPath('package.json'), this.pkg);
  }

  end() {
    this.spawnCommandSync('git', ['init', '--quiet'], {
      cwd: this.destinationPath('')
    });
    const repoSSH = 'git@git.mysoft.com.cn:' + this.pkg.repository + '.git';
    this.spawnCommandSync('git', ['remote', 'add', 'origin', repoSSH], {
      cwd: this.destinationPath('')
    });
  }
};
