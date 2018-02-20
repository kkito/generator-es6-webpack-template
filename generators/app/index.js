'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const path = require('path');
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
    const copyFiles = {
      tests: '__tests__',
      src: 'src',
      __babelrc: '.babelrc',
      '__eslintrc.json': '.eslintrc.json',
      __gitignore: '.gitignore',
      '_package.json': 'package.json',
      '_webpack.config.js': 'webpack.config.js'
    };

    const keys = Object.keys(copyFiles);
    keys.forEach(file => {
      const targetFile = copyFiles[file];
      this.fs.copyTpl(this.templatePath(file), this.destinationPath(targetFile), {
        appname: path.basename(process.cwd())
      });
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
