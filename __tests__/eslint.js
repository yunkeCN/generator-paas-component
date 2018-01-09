const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('node:eslint', () => {
    it('fill package.json', () => {
        return helpers.run(require.resolve('../generators/eslint')).then(() => {
            assert.fileContent('package.json', /"eslint-config-airbnb-base":/);
            assert.file('.eslintignore');
        });
    });
});
