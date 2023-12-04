const getFileLines = require('../utils/get-file-lines')
const path = require('path')
const getGameData = require('./get-game-data')
const getPossibleGamesSum = require('./get-possible-games-sum')

const gameConfig = { red: 12, green: 13, blue: 14 };

describe('getPossibleGamesSum', () => {
  it('Should return 8', () => {
    const lines = getFileLines(path.join(__dirname, './test-input.txt'));
    const gameData = lines.map(getGameData);

    expect(getPossibleGamesSum(gameData, gameConfig)).toEqual(8);
  })

  it('Should return 2776', () => {
    const lines = getFileLines(path.join(__dirname, './input.txt'));
    const gameData = lines.map(getGameData);

    expect(getPossibleGamesSum(gameData, gameConfig)).toEqual(2776);
  })
});
