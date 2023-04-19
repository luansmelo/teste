const { startGame } = require("./gameLogic");

const getUserInput = (message) => {
  return prompt(message);
};

startGame(getUserInput);
