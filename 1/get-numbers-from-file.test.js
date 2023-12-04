const getNumbersFromFile = require('./get-numbers-from-file');

describe('getNumbersFromFile', () => {
  it('Should return 55834 for input.txt', () => {
    expect(getNumbersFromFile('./input.txt')).toEqual(55834);
  });

  it('Should return 53221 for input.txt', () => {
    expect(getNumbersFromFile('./input.txt', true)).toEqual(53221);
  });
});
