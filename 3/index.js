const path = require('path')
const getLines = require('../utils/get-file-lines')
const getGridItems = require('./get-grid-items')
const getPartsNumbersSum = require('./get-parts-numbers-sum')
const getGearRatioSum = require('./get-gear-ratio-sum')

const lines = getLines(path.join(__dirname, './input.txt'));
const gridItems = getGridItems(lines);

console.log('part 1', getPartsNumbersSum(gridItems));
console.log('part 2', getGearRatioSum(gridItems));
