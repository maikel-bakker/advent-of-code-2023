const getGridMax = require('./get-grid-max');

/**
 *
 * @param gridItems {GridItem[]}
 * @param item {GridItem}
 * @returns {GridItemPosition[]}
 */
function getSurroundingPositions(gridItems, item) {
  const { startX, endX, startY, endY } = item;
  const { maxX, maxY } = getGridMax(gridItems);

  const width = endX - startX + 1;

  const topItemPositions = [...Array(width).keys()]
    .map(i => {
      return (startY - 1) >= 0 ? { x: startX + i, y: startY - 1 } : null
    })
    .filter(Boolean)

  const bottomItemPositions =
    [...Array(width).keys()]
      .map(i => {
        return endY + 1 <= maxY ? { x: startX + i, y: endY + 1 } : null
      })
      .filter(Boolean)

  const leftItemPosition = startX - 1 > 0 ? { x: startX - 1, y: startY } : null
  const rightItemPosition = endX + 1 <= maxX ? { x: endX + 1, y: startY } : null
  const topLeftItemPosition = startX - 1 > 0 && startY - 1 >= 0 ? { x: startX - 1, y: startY - 1 } : null
  const topRightItemPosition = endX + 1 <= maxX && startY - 1 >= 0 ? { x: endX + 1, y: startY - 1 } : null
  const bottomLeftItemPosition = startX - 1 > 0 && endY + 1 <= maxY ? { x: startX - 1, y: endY + 1 } : null
  const bottomRightItemPosition = endX + 1 <= maxX && endY + 1 <= maxY ? { x: endX + 1, y: endY + 1 } : null

  return [
    ...topItemPositions,
    ...bottomItemPositions,
    leftItemPosition,
    rightItemPosition,
    topLeftItemPosition,
    topRightItemPosition,
    bottomLeftItemPosition,
    bottomRightItemPosition,
  ].filter(Boolean);
}

module.exports = getSurroundingPositions;
