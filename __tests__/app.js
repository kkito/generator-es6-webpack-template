'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-es-6-webpack-template:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ someAnswer: true });
  });

  it('creates files', () => {
    const createFiles = [
      'package.json',
      'webpack.config.js',
      '.gitignore',
      '.babelrc',
      '.eslintrc.json'
    ];
    assert.file(createFiles);
  });
});
