const path = require('path');
const getFileLines = require('../utils/get-file-lines');
const getGameData = require('./get-game-data');
const getPossibleGamesSum = require('./get-possible-games-sum');
const getGameSum = require('./get-game-sum');

const lines = getFileLines(path.join(__dirname, './input.txt'));
const gameData = lines.map(getGameData);

// part 1
console.log(getPossibleGamesSum(gameData, { red: 12, green: 13, blue: 14 }));

// part 2
console.log(getGameSum(gameData));

