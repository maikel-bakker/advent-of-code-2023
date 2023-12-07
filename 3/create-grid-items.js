/**
 *
 * @param line {string}
 * @param y {number}
 * @returns {GridItem[]}
 */

function createGridItemsFromLine(line, y) {
  const { gridItems } = line.split('').reduce((acc, char, index) => {
    const isNumber = !isNaN(Number(char));
    const isSymbol = /[!@#$%^&*()_+{}\[\]:;<>,?~\\|=/-]/.test(char);
    const positionKey = `${index}-${y}`;

    // If the previous item was a number, and the current item is a number,
    // then we want to append the current item to the previous item's value.
    if (acc.numberStartPosition !== null && isNumber) {
      const prevItem = acc.gridItems[acc.numberStartPosition];
      prevItem.endX = index;
      prevItem.value = `${prevItem.value}${char}`;
      return acc;
    }

    return {
      ...acc,
      numberStartPosition: isNumber ? positionKey : null, // keep track of the position of the first number in a sequence
      gridItems: {
        ...acc.gridItems,
        [positionKey]: {
          startX: index,
          endX: index,
          startY: y,
          endY: y,
          value: char,
          isNumber,
          isSymbol,
        }
      }
    }
  }, {
    numberStartPosition: null,
    gridItems: {}
  })

  return Object.values(gridItems);
}

module.exports = createGridItemsFromLine;
