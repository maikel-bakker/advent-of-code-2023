const getGameData = require('./get-game-data');

describe('getGameData', () => {
  it('Should return the correct game data', () => {
    const line = 'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green'
    expect(getGameData(line)).toEqual({
      gameNumber: 1,
      gameSets: [
        { blue: 3, red: 4 },
        { red: 1, green: 2, blue: 6 },
        { green: 2 }
      ]
    });
  });
});
