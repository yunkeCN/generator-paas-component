'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-paas-component:app', () => {
    beforeAll(() => {
        return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({
            name: 'awesome_name',
            description: 'awesome component description'
        });
    });

    it('creates files', () => {
        assert.jsonFileContent('package.json', {
            name: 'awesome_name',
            description: 'awesome component description',
            version: '0.0.1',
            main: 'index.js',
            scripts: {
                test: 'echo "Error: no test specified" && exit 1'
            },
            author: '',
            license: 'ISC'
        });
    });
});
