'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-paas-component:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/bussness'))
      .withOptions({ name: 'awesome_name' });
  });

  it('creates files', () => {
    assert.file(['README.md']);
  });
});
