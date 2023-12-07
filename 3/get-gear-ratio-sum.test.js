const path = require('path')
const getLines = require('../utils/get-file-lines')
const getGearRatioSum = require('./get-gear-ratio-sum')
const getGridItems = require('./get-grid-items')

describe('getPartsNumbersSum', () => {
  it('Should return 467835', () => {
    const lines = getLines(path.join(__dirname, './test-input.txt'));
    const gridItems = getGridItems(lines);

    const result = getGearRatioSum(gridItems);
    expect(result).toEqual(467835);
  });

  it('Should return 78915902', () => {
    const lines = getLines(path.join(__dirname, './input.txt'));
    const gridItems = getGridItems(lines);

    const result = getGearRatioSum(gridItems);
    expect(result).toEqual(78915902);
  });
});
