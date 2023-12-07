const createGridItemsFromLine = require('./create-grid-items')

/**
 *
 * @param lines {string[]}
 * @returns {GridItem[]}
 */
function getGridItems(lines) {
  return lines.map((line, y) => createGridItemsFromLine(line, y)).flat();
}

module.exports = getGridItems;
