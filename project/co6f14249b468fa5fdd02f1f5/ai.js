// This is the AI-generated version

let deck = [];
let playerHand = [];
let dealerHand = [];
let isAlive = false;
let hasBlackjack = false;
let message = "";

// UI elements
const messageEl = document.getElementById("message-el");
const cardsEl = document.getElementById("cards-el");
const sumEl = document.getElementById("sum-el");
const playerEl = document.getElementById("player-el");

// Build a fresh deck of 52 cards
function buildDeck() {
    const suits = ['♠', '♥', '♦', '♣'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const deck = [];

    for (let suit of suits) {
        for (let value of values) {
            deck.push({ suit, value });
        }
    }

    return deck;
}

// Shuffle the deck
function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// Draw the top card from the deck
function drawCard(deck) {
    return deck.pop();
}

// Calculate hand value with Ace handling
function getHandValue(hand) {
    let value = 0;
    let aces = 0;

    for (let card of hand) {
        if (card.value === 'A') {
            value += 11;
            aces++;
        } else if (['K', 'Q', 'J'].includes(card.value)) {
            value += 10;
        } else {
            value += parseInt(card.value);
        }
    }

    // If busted and we have Aces, reduce them to 1
    while (value > 21 && aces > 0) {
        value -= 10;
        aces--;
    }

    return value;
}

function startNewGame() {
    deck = buildDeck();
    shuffle(deck);
    playerHand = [drawCard(deck), drawCard(deck)];
    dealerHand = [drawCard(deck), drawCard(deck)];
    isAlive = true;
    hasBlackjack = false;

    renderGame();
}

function drawNewCard() {
    if (!isAlive || hasBlackjack) return;

    playerHand.push(drawCard(deck));
    renderGame();
}

function renderGame() {
    const playerValue = getHandValue(playerHand);

    // Display cards
    cardsEl.textContent = "Cards: " + playerHand.map(c => `${c.value}${c.suit}`).join(" ");
    sumEl.textContent = "Sum: " + playerValue;

    // Decide game state
    if (playerValue < 21) {
        message = "Do you want to draw a new card?";
    } else if (playerValue === 21) {
        message = "You've got Blackjack!";
        hasBlackjack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }

    messageEl.textContent = message;
}
