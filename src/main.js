const readline = require("readline-sync");

const getUserInput = (message) => {
  return readline.question(message);
};

const { startGame } = require("./gameLogic");

startGame(getUserInput);
