'use strict';
const Generator = require('yeoman-generator');
const rootPkg = require('../../package.json');

module.exports = class extends Generator {
  writing() {
    const pkgJson = {
      devDependencies: {
        eslint: rootPkg.devDependencies.eslint,
        prettier: rootPkg.devDependencies.prettier,
        husky: rootPkg.devDependencies.husky,
        'lint-staged': rootPkg.devDependencies['lint-staged'],
        'eslint-config-prettier': rootPkg.devDependencies['eslint-config-prettier'],
        'eslint-plugin-prettier': rootPkg.devDependencies['eslint-plugin-prettier'],
        'eslint-config-xo': rootPkg.devDependencies['eslint-config-xo']
      },
      'lint-staged': rootPkg['lint-staged'],
      eslintConfig: rootPkg.eslintConfig,
      scripts: {
        pretest: rootPkg.scripts.pretest,
        precommit: rootPkg.scripts.precommit
      }
    };

    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);

    this.fs.copy(
      this.templatePath('eslintignore'),
      this.destinationPath('.eslintignore')
    );
  }
  install() {
    if (!this.options.skipInstall) {
      this.installDependencies({
        bower: false
      });
    }
  }
};
