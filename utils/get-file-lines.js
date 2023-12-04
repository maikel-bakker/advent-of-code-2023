const fs = require('fs')
const path = require('path')

/**
 *
 * @param filePath {string}
 * @returns {string[]}
 */
function getFileLines(filePath) {
  const file = fs.readFileSync(filePath, 'utf8');
  return file.split('\n').filter(Boolean);
}

module.exports = getFileLines;
