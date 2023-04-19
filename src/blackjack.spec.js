import { newDeck, shuffleDeck, dealCard, handValue }  from "./blackjack";

test("newDeck creates a deck with 52 cards", () => {
  const deck = newDeck();
  expect(deck.length).toBe(52);
});

test("shuffleDeck shuffles the deck", () => {
  const deck1 = newDeck();
  const deck2 = newDeck();
  shuffleDeck(deck2);
  expect(deck1).not.toEqual(deck2);
});

test("dealCard removes a card from the deck", () => {
  const deck = newDeck();
  const card = dealCard(deck);
  expect(deck.length).toBe(51);
  expect(deck.includes(card)).toBe(false);
});

test("handValue calculates the value of a hand", () => {
  const hand1 = [{ value: "2", suit: "♠" }, { value: "K", suit: "♣" }];
  const hand2 = [{ value: "A", suit: "♠" }, { value: "K", suit: "♣" }];
  const hand3 = [{ value: "A", suit: "♠" }, { value: "A", suit: "♣" }];

  expect(handValue(hand1)).toBe(12);
  expect(handValue(hand2)).toBe(21);
  expect(handValue(hand3)).toBe(12);
});
