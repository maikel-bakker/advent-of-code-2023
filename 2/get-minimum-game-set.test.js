const gameData = require('./test-game-data.json');
const getMinimumGameSet = require('./get-minimum-game-set');

describe('getMinimumGameSet', () => {
  it('Should return minimum game set for game 1', () => {
    expect(getMinimumGameSet(gameData[0])).toEqual({
      red: 4,
      green: 2,
      blue: 6,
    });
  });

  it('Should return minimum game set for game 2', () => {
    expect(getMinimumGameSet(gameData[1])).toEqual({
      red: 1,
      green: 3,
      blue: 4,
    });
  });

  it('Should return minimum game set for game 3', () => {
    expect(getMinimumGameSet(gameData[2])).toEqual({
      red: 20,
      green: 13,
      blue: 6,
    });
  });

  it('Should return minimum game set for game 4', () => {
    expect(getMinimumGameSet(gameData[3])).toEqual({
      red: 14,
      green: 3,
      blue: 15,
    });
  });

  it('Should return minimum game set for game 5', () => {
    expect(getMinimumGameSet(gameData[4])).toEqual({
      red: 6,
      green: 3,
      blue: 2,
    });
  });
});
