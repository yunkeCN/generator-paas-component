const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('node:eslint', () => {
  it('fill package.json', () => {
    return helpers.run(require.resolve('../generators/eslint')).then(() => {
      assert.fileContent('package.json', /"eslint-config-xo":/);
      assert.jsonFileContent('package.json', {
        eslintConfig: {
          extends: ['xo', 'prettier'],
          env: {
            jest: true
          }
        },
        scripts: {
          pretest: 'eslint .'
        }
      });
      assert.file('.eslintignore');
    });
  });
});
