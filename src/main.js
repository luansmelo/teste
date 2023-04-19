const gameLogic = require("./gameLogic");

let getUserInput;

if (typeof window !== "undefined") {
  getUserInput = (message) => {
    return prompt(message);
  };
} else {
  const readlineSync = require("readline-sync");
  getUserInput = (message) => {
    return readlineSync.question(message);
  };
}

gameLogic.startGame(getUserInput);
