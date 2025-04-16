// This is my attempt to create a cleaner version of the blackjack

class Player{
    constructor(name, hand, chips) {
        this.name = name;
        this.hand = hand || [];
        this.chips = chips;
    }

displayPlayer(){
    console.log(`Name: ${this.name}`);
    console.log(`Hand: ${this.hand}`)
    console.log(`Chips: ${this.chips}`)
}}   

class Card{
    constructor(name, value, suit, file_location){
        this.name = name;
        this.value = value;
        this.suit = suit;
        this.file_location = file_location;
    }

    displayCard(){
        console.log(`Card: ${this.name}`);
        console.log(`Value: ${this.value}`);
        console.log(`Suit: ${this.suit}`);
        console.log(`File location: ${this.file_location}`);
    }
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

let deckArray = Object.values(deck);

let shuffledDeck = shuffle(deckArray)
shuffle(deckArray)

function openingHand() {
    let hand = [];
    hand.push(drawNewCard());
    hand.push(drawNewCard());
    return hand;
}

function sumOfStartingHand(hand){
    let sum = hand[0].value + hand[1].value
    return sum
}


function shuffle(deckArray){
    for (let i = deckArray.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));
        [deckArray[i], deckArray[random]] = [deckArray[random], deckArray[i]];
    } 
    return deckArray
}


function drawNewCard(){
    let newCard = shuffledDeck.pop()
    console.log(newCard)
    console.log(shuffledDeck.length)
    let cardEl = document.getElementById('cards-el')
    cardEl.textContent += newCard.name + " "
    
return newCard
}

function dealCards(hand, sum){
            let newCard = drawNewCard(sum)
            hand.push(newCard)
            sum += newCard.value
            console.log(hand)
            console.log(sum)


    }

function renderGame(){
    let message = document.getElementById('message-el')
    message.textContent = "Hello and welcome to Blackjack for everyone!"
    let hand = []
    let sum = 0
    hand = openingHand() 

    if (hand && sum < 21) {
        let sum = hand[0].value + hand[1].value
        dealCards(hand, sum)
        console.log("Deal cards hand")
    } else {
        
        let sum = hand[0].value + hand[1].value
        console.log(hand)
        console.log("Your starting hands equal to: " + sum)
    }


}

function startNewGame(){
    for (let i= 0; i = deckArray.lenght -1 ; i++){
        deckArray = deckArray[i].push(deck[i])
        console.log("Deck array" + deckArray)
    }

    document.getElementById('cards-el').textContent = "";
    play()
    return deckArray
}

function play(){
    renderGame()
}
