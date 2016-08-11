/*console.log("JS file is connected to HTML! Woo!")
get age

if age >= 65
    display message "Ticket price: $6.00"

otherwise if age < 25
    display message "Ticket price: $8.00"

otherwise
    display message "Ticket price: $10.00"*/

/*var cardOne = "king";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "queen";

if(cardOne === cardThree || cardTwo === cardFour) {
  alert("You've found a match! Wooo!");
}
else {
  alert("Sorry, try again.")
}*/
var cards = ['queen', 'queen', 'king', 'king'];

var cardsinPlay = [ ];

var board = document.getElementById('game-board');

function createBoard() {
	for (var i = 0; i < cards.length; i++){
	var cardElement = document.createElement('div');
	cardElement.className = 'card';
	cardElement.setAttribute('data-card', cards[i]);
	board.appendChild(cardElement);
	board.appendChild(cardElement);
	cardElement.addEventListener('click', isTwoCards);
	}
}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') == 'king') {
		this.innerHTML = '<img src="king card.jpg"/>';
	}
	else {
		this.innerHTML = '<img src="queen card.jpg"/>';
	}
	if (cardsInPlay.length === 2) {
	isMatch(cardsInPlay);
	cardsInPlay = [];
	}
}

function isMatch(cards) {
	if (card[0] === card[1]) {
	alert("You found a match!");
	}
	else {
	alert("Sorry, try again!");
	}
}

createBoard();
