const { GameData } = require('./types');
const getMinimumGameSet = require('./get-minimum-game-set')

/**
 *
 * @param gameData {GameData[]}
 * @returns {number}
 */
function getGameSum(gameData) {
  const minGameSets = gameData.map(getMinimumGameSet);
  const gameSetSums = minGameSets.map((gameSet) => gameSet.red * gameSet.green * gameSet.blue);
  return gameSetSums.reduce((acc, sum) => acc + sum, 0);
}

module.exports = getGameSum;
