const { GameData, GameSet } = require('./types');

/**
 * @param gameSetText {string}
 * @returns {GameSet}
 */
function parseGameSet(gameSetText) {
  const items = gameSetText.trim().split(',').map((item) => item.trim());
  return items.reduce((acc, item) => {
    const [count, color] = item.split(' ');
    return {
      ...acc,
      [color]: parseInt(count),
    }
  }, {});
}

/**
 * Parse a line of text into game data
 * @param line {string}
 * @returns {GameData}
 */
function getGameData(line) {
  const [gameText, gameSetsText] = line.split(':');
  const [, gameNumberText] = gameText.split(' ')

  const gameSets = gameSetsText
    .split(';')
    .map(parseGameSet)

  return {
    gameNumber: parseInt(gameNumberText),
    gameSets,
  };
}

module.exports = getGameData;
