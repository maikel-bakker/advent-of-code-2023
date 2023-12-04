const fs = require('fs')
const path = require('path')
const getNumbersFromLine = require('./get-numbers-from-line');

/**
 * Reads file and parses every line to get the numbers and returns the sum of all numbers.
 * @param filePath {string}
 * @param withWrittenNumbers {boolean}
 * @returns {number}
 */
function getNumbersFromFile(filePath, withWrittenNumbers = false) {
  const file = fs.readFileSync(path.join(__dirname, filePath), 'utf8');
  const lines = file.split('\n').filter(Boolean);
  const numbers = lines.map((line) => getNumbersFromLine(line, withWrittenNumbers));
  return numbers.reduce((acc, number) => acc + number, 0);
}

module.exports = getNumbersFromFile;
