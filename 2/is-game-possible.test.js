const gameData = require('./test-game-data');
const isGamePossible = require('./is-game-possible');

const gameConfig = { red: 12, green: 13, blue: 14 };

describe('isGamePossible', () => {
  it('Should return true for game 1', () => {
    expect(isGamePossible(gameData[0], gameConfig)).toEqual(true);
  });

  it('Should return true for game 2', () => {
    expect(isGamePossible(gameData[1], gameConfig)).toEqual(true);
  });

  it('Should return false for game 3', () => {
    expect(isGamePossible(gameData[2], gameConfig)).toEqual(false);
  });

  it('Should return false for game 4', () => {
    expect(isGamePossible(gameData[3], gameConfig)).toEqual(false);
  });

  it('Should return false for game 5', () => {
    expect(isGamePossible(gameData[4], gameConfig)).toEqual(true);
  });
})
