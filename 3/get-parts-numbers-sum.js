const getSurroundingPositions = require('./get-surrounding-positions')

/**
 *
 * @param gridItems {GridItem[]}
 * @returns {number}
 */
function getPartsNumbersSum(gridItems) {
  const partNumbers = gridItems
    .filter((item) => item.isNumber)
    .filter((item) => {
      const surroundingPositions = getSurroundingPositions(gridItems, item);
      const surroundingItems = surroundingPositions
        .filter(Boolean)
        .map((position) => gridItems.find((item) => position.x >= item.startX && position.x <= item.endX && item.startY === position.y))

      return surroundingItems.some((item) => item.isSymbol);
    })

  return partNumbers.reduce((acc, item) => acc + Number(item.value), 0);
}

module.exports = getPartsNumbersSum;
