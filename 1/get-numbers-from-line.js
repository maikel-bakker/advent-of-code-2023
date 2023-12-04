const numberReferences = [
  {
    number: 1,
    word: 'one',
  },
  {
    number: 2,
    word: 'two',
  },
  {
    number: 3,
    word: 'three',
  },
  {
    number: 4,
    word: 'four',
  },
  {
    number: 5,
    word: 'five',
  },
  {
    number: 6,
    word: 'six',
  },
  {
    number: 7,
    word: 'seven',
  },
  {
    number: 8,
    word: 'eight',
  },
  {
    number: 9,
    word: 'nine',
  },
]

/**
 * Loops backwards and forwards through the line, finds first number in written or numeric form.
 * @param line {string}
 * @param withWrittenNumbers {boolean}
 * @returns {number}
 */
function getNumbersFromLine(line, withWrittenNumbers = false) {
  const result = line
    .trim()
    .split('')
    .reduce((acc, forwardChar, index, charArray) => {
      const endIndex = charArray.length - 1 - index;
      const backwardChar = charArray[endIndex];

      const charNumberForward = numberReferences.find(({ number }) => number.toString() === forwardChar);
      const charNumberBackward = numberReferences.find(({ number }) => number.toString() === backwardChar);

      acc.forwardLine = `${acc.forwardLine}${forwardChar}`
      acc.backwardLine = `${backwardChar}${acc.backwardLine}`

      if (charNumberForward && !acc.firstForwardNumber) {
          acc.forwardLine = ''
          acc.firstForwardNumber = charNumberForward.number
      }

      if (charNumberBackward && !acc.firstBackwardNumber) {
        acc.backwardLine = ''
        acc.firstBackwardNumber = charNumberBackward.number
      }

      // part 2
      if (withWrittenNumbers) {
        const wordNumberForward = numberReferences.find(({ word }) => acc.forwardLine.includes(word));
        const wordNumberBackward = numberReferences.find(({ word }) => acc.backwardLine.includes(word));

        if (wordNumberForward && !acc.firstForwardNumber) {
          acc.forwardLine = ''
          acc.firstForwardNumber = wordNumberForward.number
        }

        if (wordNumberBackward && !acc.firstBackwardNumber) {
          acc.backwardLine = ''
          acc.firstBackwardNumber = wordNumberBackward.number
        }

      }


      return acc;
  }, {
    forwardLine: '',
    backwardLine: '',
    firstForwardNumber: null,
    firstBackwardNumber: null,
  });

  return parseInt(`${result.firstForwardNumber}${result.firstBackwardNumber}`);
}
module.exports = getNumbersFromLine;
