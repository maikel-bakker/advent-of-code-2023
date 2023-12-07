const path = require('path')
const getLines = require('../utils/get-file-lines')
const getPartsNumbersSum = require('./get-parts-numbers-sum')
const getGridItems = require('./get-grid-items')

describe('getPartsNumbersSum', () => {
  it('Should return 4361', () => {
    const lines = getLines(path.join(__dirname, './test-input.txt'));
    const gridItems = getGridItems(lines);

    const result = getPartsNumbersSum(gridItems);
    expect(result).toEqual(4361);
  });

  it('Should return 656', () => {
    const lines = getLines(path.join(__dirname, './input.txt'));
    const gridItems = getGridItems(lines);

    const result = getPartsNumbersSum(gridItems);
    expect(result).toEqual(656);
  });
});
