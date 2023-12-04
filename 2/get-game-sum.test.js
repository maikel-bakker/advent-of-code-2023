const path = require('path')
const getFileLines = require('../utils/get-file-lines')
const getGameData = require('./get-game-data')
const getGameSum= require('./get-game-sum');

describe('getGameSum', () => {
  it('Should return 2286 for test-input.txt', () => {
    const lines = getFileLines(path.join(__dirname, './test-input.txt'));
    const gameData = lines.map(getGameData);

    expect(getGameSum(gameData)).toEqual(2286);
  });

  it('Should return 68638 for input.txt', () => {
    const lines = getFileLines(path.join(__dirname, './input.txt'));
    const gameData = lines.map(getGameData);

    expect(getGameSum(gameData)).toEqual(68638);
  });
});
