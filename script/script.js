//available cards
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];

let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 
'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];

//create deck
function createDeck() {
    let deck = [];

    //add available cards to the deck
    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
        for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
            let card = {
                suit: suits[suitIdx],
                value: values[valueIdx]
            };
            deck.push(card);
        }
    }

    return deck;
}

//intiate deck
let deck = createDeck();

//get card from deck
function getNextCard() {
    return deck.shift();
}

//create card string
function getCardString(playerCard) {
    return playerCard.value + ' of ' + playerCard.suit;
}

//player card
let playerCards = [
    getCardString(getNextCard()), 
    getCardString(getNextCard())
];

//welcome message
console.log('Welcome to Blackjack!');

//card in play
console.log('You are dealt: ');
console.log(' ' + playerCards[0]);
console.log(' ' + playerCards[1]);
