const createGridItems = require('./create-grid-items');

describe('createGridItems', () => {
  it('Should create correct grid items', () => {
    expect(createGridItems('467..114..#', 0)).toEqual(
      {
        "0-0": {
          "startX": 0,
          "endX": 2,
          "endY": 0,
          "isNumber": true,
          "isSymbol": false,
          "startY": 0,
          "value": "467"
        },
        "10-0": {
          "endX": 10,
          "endY": 0,
          "isNumber": false,
          "isSymbol": true,
          "startX": 10,
          "startY": 0,
          "value": "#"
        },
        "3-0": {
          "endX": 3,
          "endY": 0,
          "isNumber": false,
          "isSymbol": false,
          "startX": 3,
          "startY": 0,
          "value": "."
        },
        "4-0": {
          "endX": 4,
          "endY": 0,
          "isNumber": false,
          "isSymbol": false,
          "startX": 4,
          "startY": 0,
          "value": "."
        },
        "5-0": {
          "endX": 7,
          "endY": 0,
          "isNumber": true,
          "isSymbol": false,
          "startX": 5,
          "startY": 0,
          "value": "114"
        },
        "8-0": {
          "endX": 8,
          "endY": 0,
          "isNumber": false,
          "isSymbol": false,
          "startX": 8,
          "startY": 0,
          "value": "."
        },
        "9-0": {
          "endX": 9,
          "endY": 0,
          "isNumber": false,
          "isSymbol": false,
          "startX": 9,
          "startY": 0,
          "value": "."
        },
      }
    );
  })
});
