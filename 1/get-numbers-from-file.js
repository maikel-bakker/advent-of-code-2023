const path = require('path')
const getNumbersFromLine = require('./get-numbers-from-line');
const getFileLines = require('../utils/get-file-lines')

/**
 * Reads file and parses every line to get the numbers and returns the sum of all numbers.
 * @param filePath {string}
 * @param withWrittenNumbers {boolean}
 * @returns {number}
 */
function getNumbersFromFile(filePath, withWrittenNumbers = false) {
  const lines = getFileLines(path.join(__dirname, filePath));
  const numbers = lines.map((line) => getNumbersFromLine(line, withWrittenNumbers));
  return numbers.reduce((acc, number) => acc + number, 0);
}

module.exports = getNumbersFromFile;
