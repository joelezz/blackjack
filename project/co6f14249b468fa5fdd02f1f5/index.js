// There is some improvements still needed like the ace handling and also the logic behind how to draw cards without replacement, ie. the game would be played with just one deck of cards.

let player = {
    name: "Player #1",
    chips: 200
}

let cards = []
let sumOfStartingHand = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let card = getRandomCard()

playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    shuffleDeck()
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    console.log(cards)
   
    sumOfStartingHand = firstCard.value + secondCard.value
    console.log("Start game sum of two first cards: " + sumOfStartingHand)
    renderGame()
}

let deck = {
    1:   { name: "ace_of_spades",   value: 1, suit: 1,  file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/ace_of_spades.png" },
    2:   { name: "two_of_spades",   value: 2, suit: 1, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/2_of_spades.png" },
    3: { name: "three_of_spades", value: 3, suit: 1, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/3_of_spades.png" },
    4:  { name: "four_of_spades",  value: 4, suit: 1, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/4_of_spades.png" },
    5:  { name: "five_of_spades",  value: 5, suit: 1, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/5_of_spades.png" },
    6:   { name: "six_of_spades",   value: 6, suit: 1, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/6_of_spades.png" },
    7: { name: "seven_of_spades", value: 7, suit: 1, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/7_of_spades.png" },
    8: { name: "eight_of_spades", value: 8, suit: 1, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/8_of_spades.png" },
    9:  { name: "nine_of_spades",  value: 9, suit: 1, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/9_of_spades.png" },
    10:   { name: "ten_of_spades",   value: 10,suit: 1, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/10_of_spades.png" },
    11:  { name: "jack_of_spades",  value: 10,suit: 1, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/jack_of_spades.png" },
    12: { name: "queen_of_spades", value: 10,suit: 1, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/queen_of_spades.png" },
    13:  { name: "king_of_spades",  value: 10,suit: 1, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/king_of_spades.png" },
  
    14:   { name: "ace_of_hearts",   value: 1, suit: 2, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/ace_of_hearts.png" },
    15:   { name: "two_of_hearts",   value: 2, suit: 2, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/2_of_hearts.png" },
    16: { name: "three_of_hearts", value: 3, suit: 2, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/3_of_hearts.png" },
    17:  { name: "four_of_hearts",  value: 4, suit: 2, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/4_of_hearts.png" },
    18:  { name: "five_of_hearts",  value: 5, suit: 2, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/5_of_hearts.png" },
    19:   { name: "six_of_hearts",   value: 6, suit: 2, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/6_of_hearts.png" },
    20: { name: "seven_of_hearts", value: 7, suit: 2, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/7_of_hearts.png" },
    21: { name: "eight_of_hearts", value: 8, suit: 2, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/8_of_hearts.png" },
    22:  { name: "nine_of_hearts",  value: 9, suit: 2, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/9_of_hearts.png" },
    23:   { name: "ten_of_hearts",   value: 10,suit: 2, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/10_of_hearts.png" },
    24:  { name: "jack_of_hearts",  value: 10,suit: 2, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/jack_of_hearts.png" },
    25: { name: "queen_of_hearts", value: 10,suit: 2, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/queen_of_hearts.png" },
    26:  { name: "king_of_hearts",  value: 10,suit: 2, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/king_of_hearts.png" },
  
    27:    { name: "ace_of_clubs",    value: 1, suit: 3, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/ace_of_clubs.png" },
    28:    { name: "two_of_clubs",    value: 2, suit: 3, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/2_of_clubs.png" },
    29:  { name: "three_of_clubs",  value: 3, suit: 3, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/3_of_clubs.png" },
    30:   { name: "four_of_clubs",   value: 4, suit: 3, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/4_of_clubs.png" },
    31:   { name: "five_of_clubs",   value: 5, suit: 3, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/5_of_clubs.png" },
    32:    { name: "six_of_clubs",    value: 6, suit: 3, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/6_of_clubs.png" },
    33:  { name: "seven_of_clubs",  value: 7, suit: 3, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/7_of_clubs.png" },
    34:  { name: "eight_of_clubs",  value: 8, suit: 3, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/8_of_clubs.png" },
    35:   { name: "nine_of_clubs",   value: 9, suit: 3, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/9_of_clubs.png" },
    36:    { name: "ten_of_clubs",    value: 10,suit: 3, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/10_of_clubs.png" },
    37:   { name: "jack_of_clubs",   value: 10,suit: 3, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/jack_of_clubs.png" },
    38:  { name: "queen_of_clubs",  value: 10,suit: 3, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/queen_of_clubs.png" },
    39:   { name: "king_of_clubs",   value: 10,suit: 3, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/king_of_clubs.png" },
  
    40:   { name: "ace_of_diamonds",   value: 1, suit: 4, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/ace_of_diamonds.png" },
    41:   { name: "two_of_diamonds",   value: 2, suit: 4, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/2_of_diamonds.png" },
    42: { name: "three_of_diamonds", value: 3, suit: 4, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/3_of_diamonds.png" },
    43:  { name: "four_of_diamonds",  value: 4, suit: 4, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/4_of_diamonds.png" },
    44:  { name: "five_of_diamonds",  value: 5, suit: 4, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/5_of_diamonds.png" },
    45:   { name: "six_of_diamonds",   value: 6, suit: 4, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/6_of_diamonds.png" },
    46: { name: "seven_of_diamonds", value: 7, suit: 4, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/7_of_diamonds.png" },
    47: { name: "eight_of_diamonds", value: 8, suit: 4, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/8_of_diamonds.png" },
    48:  { name: "nine_of_diamonds",  value: 9, suit: 4, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/9_of_diamonds.png" },
    49:   { name: "ten_of_diamonds",   value: 10,suit: 4, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/10_of_diamonds.png" },
    50:  { name: "jack_of_diamonds",  value: 10,suit: 4, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/jack_of_diamonds.png" },
    51: { name: "queen_of_diamonds", value: 10,suit: 4, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/queen_of_diamonds.png" },
    52:  { name: "king_of_diamonds",  value: 10,suit: 4, file_location: "/project/co6f14249b468fa5fdd02f1f5/images/Playing Cards/Playing Cards/PNG-cards-1.3/king_of_diamonds.png" }
  };

let shuffledDeck = []

function shuffleDeck() {
    shuffledDeck = Object.values(deck)
    for (let i = shuffledDeck.length - 1; i >= 1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
    }
}

 function getRandomCard(){
     return shuffledDeck.pop()
    
 }

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        let img = document.createElement("img");
        img.src = cards[i].file_location;
        let src = document.getElementById("cards-el");
        src.append(img);
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    }
    else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        shuffleDeck()
        console.log(card)
        calculateHand()
        cards.push(card)
        renderGame()        
    }
}

function calculateHand(){
    sumOfStartingHand += card.value
    if (sumOfStartingHand === 21 ){
        
    }
}

function getCardValue(card) {
    if (card.value === 1 && (sum + 10) <= 21) {
        return 11;
    }
    return card.value;
}