const getNumbersFromLine = require('./get-numbers-from-line');

describe('getNumbersFromLine', () => {
  // part 1
  it.each([
    ['1abc2', 12],
    ['pqr3stu8vwx', 38],
    ['a1b2c3d4e5f', 15],
    ['treb7uchet', 77],
  ])('%s should equal %i', (line, expected) => {
    expect(getNumbersFromLine(line)).toEqual(expected);
  });

  // part 2
  it.each([
    ['two1nine', 29],
    ['eightwothree', 83],
    ['abcone2threexyz', 13],
    ['xtwone3four', 24],
    ['4nineeightseven2', 42],
    ['zoneight234', 14],
    ['7pqrstsixteen', 76],
    ['stbqnrhdqnjcvjgthtmht8xndfgprq3eightwol', 82],
    ['vdxpfourone1393mtvtlzmj', 43]
  ])('%s should equal %i', (line, expected) => {
    expect(getNumbersFromLine(line, true)).toEqual(expected);
  });
})
