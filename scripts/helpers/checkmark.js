/* eslint-disable import/no-extraneous-dependencies */
const chalk = require('chalk');

/**
 * Adds mark check symbol
 */
function addCheckMark(callback) {
  process.stdout.write(chalk.green(' ✓'));
  if (callback) callback();
}

module.exports = addCheckMark;
