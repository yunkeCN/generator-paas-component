'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    writing() {
        const pkgJson = {
            devDependencies: {
                eslint: '^4.1.0',
                'eslint-config-airbnb-base': '^12.1.0',
                'eslint-plugin-html': '^4.0.1',
                'eslint-plugin-import': '^2.8.0'
            },
            eslintConfig: {
                parser: 'babel-eslint',
                parserOptions: {
                    sourceType: 'module'
                },
                extends: 'airbnb-base',
                plugins: ['html'],
                rules: {
                    indent: ['error', 4],
                    semi: 0,
                    'comma-dangle': 0,
                    'linebreak-style': 0,
                    'no-console': 0
                }
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
                bower: false,
                yarn: true,
                npm: false
            });
        }
    }
};
