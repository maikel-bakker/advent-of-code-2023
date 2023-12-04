const { GameData, GameSet } = require('./types');

/**
 * Determines if a game is possible according to the game rules.
 * @param gameData {GameData}
 * @param gameConfig {GameSet}
 * @returns {boolean}
 */
function isGamePossible(gameData, gameConfig) {
  const { gameSets } = gameData;
  const { red: redLimit, green: greenLimit, blue: blueLimit } = gameConfig;

  return !gameSets.some((gameSet) => {
    const { red: redCount, green: greenCount, blue: blueCount } = gameSet;
    return (
      (redCount > redLimit) ||
      (greenCount >  greenLimit) ||
      (blueCount > blueLimit)
    );
  });
}

module.exports = isGamePossible;
