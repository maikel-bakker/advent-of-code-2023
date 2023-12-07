function getGridMax(gridItems) {
  return gridItems.reduce((acc, item) => {
    return {
      maxX: Math.max(acc.maxX, item.endX),
      maxY: Math.max(acc.maxY, item.endY),
    }
  }, {
    maxX: 0,
    maxY: 0,
  });
}

module.exports = getGridMax;
