const getSurroundingPositions = require('./get-surrounding-positions')

/**
 *
 * @param gridItems {GridItem[]}
 * @returns {number}
 */
function getGearRatioSum(gridItems) {
  const gearRatioItems = gridItems
    .filter((item) => item.value === '*')
    .reduce((acc, item) => {
      const surroundingPositions = getSurroundingPositions(gridItems, item);

      const surroundingNumbers = new Set();
      const surroundingItems = surroundingPositions
        .filter(Boolean)
        .map((position) => gridItems.find((item) => position.x >= item.startX && position.x <= item.endX && item.startY === position.y))
        .filter((item) => item.isNumber);

      surroundingItems.forEach((item) => surroundingNumbers.add(item.value));

      if (surroundingNumbers.size === 2) {
        return [
          ...acc,
          Array.from(surroundingNumbers)
        ];
      }

      return acc;
    }, [])

  return gearRatioItems.reduce((acc, items) => {
    const [a, b] = items;

    return acc + (a * b);
  }, 0);
}

module.exports = getGearRatioSum;
