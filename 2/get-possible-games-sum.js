const { GameData, GameSet } = require('./types');
const isGamePossible = require('./is-game-possible')

/**
 * Filter all possible games according to the game config and return the sum of the game numbers
 * @param gameData {GameData[]}
 * @param gameConfig {GameSet}
 * @returns {number}
 */

function getPossibleGamesSum(gameData, gameConfig) {
  const possibleGames = gameData.filter((game) => isGamePossible(game, gameConfig));
  return possibleGames.reduce((acc, game) => acc + game.gameNumber, 0);
}

module.exports = getPossibleGamesSum;
