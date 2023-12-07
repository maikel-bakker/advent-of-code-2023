const getSurroundingPositions = require('./get-surrounding-positions');
const gridItems = require('./test-grid-items.json');

describe('getSurroundingPositions', () => {
  it('Should return correct surrounding positions for first item', () => {
    const result = getSurroundingPositions(gridItems, gridItems[0]);

    expect(result).toEqual(expect.arrayContaining([
      { x: 3, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 3, y: 1 },
    ]));
  });
});
