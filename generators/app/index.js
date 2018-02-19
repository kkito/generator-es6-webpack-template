'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        'Welcome to the geometric ' +
          chalk.red('generator-es6-webpack-template') +
          ' generator!'
      )
    );

    const prompts = [
      {
        type: 'confirm',
        name: 'useYarn',
        message: 'Would you like to use yarn?',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    const copyFiles = [
      '__tests__',
      'src',
      '_babelrc',
      '_eslintrc.json',
      '_gitignore',
      'package.json',
      'webpack.config.js'
    ];

    copyFiles.forEach(file => {
      const targetFile = file.replace(/^_/, '.');
      this.fs.copy(this.templatePath(file), this.destinationPath(targetFile));
    });
  }

  install() {
    let dependency = {
      npm: true,
      yarn: false,
      bower: false
    };
    if (this.props.useYarn) {
      dependency.yarn = true;
      dependency.npm = false;
    }
    this.installDependencies(dependency);
  }
};
