const gameLogic = require("./gameLogic");

let getUserInput = (message) => {
  return prompt(message);
};

gameLogic.startGame(getUserInput);
