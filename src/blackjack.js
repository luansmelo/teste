const newDeck = () => {
  const suits = ["♠", "♣", "♥", "♦"];
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const deck = [];

  for (const suit of suits) {
    for (const value of values) {
      deck.push({ suit, value });
    }
  }

  return deck;
};

const shuffleDeck = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
};

const dealCard = (deck) => deck.pop();

const cardValue = (card) => {
  const value = card.value;
  if (value === "A") {
    return 11;
  } else if (["K", "Q", "J"].includes(value)) {
    return 10;
  } else {
    return parseInt(value);
  }
};

const handValue = (hand) => {
  let value = 0;
  let aces = 0;

  for (const card of hand) {
    const cardVal = cardValue(card);
    if (cardVal === 11) {
      aces += 1;
    }
    value += cardVal;
  }

  while (value > 21 && aces > 0) {
    value -= 10;
    aces -= 1;
  }

  return value;
};

const displayHand = (hand, hideFirstCard = false) => {
  if (hideFirstCard) {
    return (
      "[hidden], " +
      hand
        .slice(1)
        .map((card) => `${card.value}${card.suit}`)
        .join(", ")
    );
  } else {
    return hand.map((card) => `${card.value}${card.suit}`).join(", ");
  }
};

const gameOver = (playerHand, computerHand) => {
  const playerValue = handValue(playerHand);
  const computerValue = handValue(computerHand);

  if (playerValue > 21) {
    return "Você perdeu!";
  } else if (computerValue > 21) {
    return "Você ganhou!";
  } else if (playerValue === computerValue) {
    return "Empate!";
  } else if (playerValue > computerValue) {
    return "Você ganhou!";
  } else {
    return "Você perdeu!";
  }
};

const startGame = () => {
  console.log("Bem-vindo ao jogo Blackjack!");

  while (true) {
    const startNewRound = prompt(
      "Deseja iniciar uma nova rodada? (s/n) "
    ).toLowerCase();
    if (startNewRound !== "s") {
      console.log("Fim de jogo.");
      break;
    }

    const deck = newDeck();
    shuffleDeck(deck);

    let playerHand = [dealCard(deck), dealCard(deck)];
    let computerHand = [dealCard(deck), dealCard(deck)];

    while (handValue(playerHand) < 21) {
      console.log("\nSua mão:", displayHand(playerHand));
      console.log("Mão do computador:", displayHand(computerHand, true));

      const buyCard = prompt(
        "Deseja comprar mais uma carta? (s/n) "
      ).toLowerCase();
      if (buyCard !== "s") {
        break;
      }
      playerHand.push(dealCard(deck));
    }

    while (handValue(computerHand) < 17) {
      computerHand.push(dealCard(deck));
    }

    console.log("\nSua mão:", displayHand(playerHand));
    console.log("Mão do computador:", displayHand(computerHand));
    console.log(gameOver(playerHand, computerHand));
  }
};

startGame();
