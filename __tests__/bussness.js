'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('bussness', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/bussness'))
      .withOptions({ name: 'awesome_name' });
  });

  it('template creates files', () => {
    assert.file(['README.md', 'index.js', 'src/index.js', 'designer']);
    assert.fileContent('src/index.js', "id: 'awesome_name'");
  });
});
