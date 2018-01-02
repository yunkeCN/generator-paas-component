'use strict';
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('node:git', () => {
  it('creates the git config files and init the repository', () => {
    return helpers
      .run(require.resolve('../generators/git'))
      .withOptions({
        name: 'xx'
      })
      .then(() => {
        assert.file('.gitignore');
        assert.file('.gitattributes');
        assert.file('.git');
      });
  });
});
