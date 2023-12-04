const { GameData, GameSet } = require('./types');

/**
 * @param gameData {GameData}
 * @returns {GameSet}
 */
function getMinimumGameSet(gameData) {
  return gameData.gameSets.reduce((acc, gameSet) => {
    const { red: redCount = 0, green: greenCount = 0, blue: blueCount = 0 } = gameSet;
    const { red: redMin, green: greenMin, blue: blueMin } = acc;

    return {
      red: Math.max(redCount, redMin),
      green: Math.max(greenCount, greenMin),
      blue: Math.max(blueCount, blueMin),
    }
  }, {
    red: 0,
    green: 0,
    blue: 0,
  })
}

module.exports = getMinimumGameSet;
