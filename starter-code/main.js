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

// var gameBoard = document.getElementById('game-board');

// var cards = ["king", "queen", "king", "queen"];
//
// for(var i = 0; i < cards.length; i++) {
//   var cardCreate = document.createElement('div');
//   cardCreate.className += ' card';
//
// }

// alternate strategy from talking to Raz
// var cards = ["king", "queen", "king", "queen"]
// cards[0] = "king"
// cards[1] = "queen"
// cards[2] = "king"
// cards[3] = "queen"
//user clicks on first card activates function cardFlip
//console.log(this.style)
//select random card
//Math.random() //produces 0-0.99999999
//Math.random() * 4 cards.length (starts off at 4)
// function flipCard() {
  // var randomIndex = Math.floor(Math.random()*cards.length) //(might be: 0, 1, 2, 3)
  // => give me the card at index 3
  // var selectedCard = cards[randomIndex]; //selectedCard = "king" or "queen"
  // Now we want to get rid of it from this global array, cards

  //before: cards = ["king", "queen", "king", "queen"]; // cards.length = 3

  // cards.splice(randomIndex, 1)

  /*First time clicked This happens...*/
  //after: cards = ["king", "queen", "queen"]; // cards.length = 3
  //We want to set the background image to either be king or queen based on
  //randomly Selected card.
  //setAttribute("style", "background-image: url(" + selectedCard + ".jpg)")
  //change array length for card based on card already chosen
  // create function to keep track of user clicks

  /*Second Time clicked ....*/
  //if its the second click we check if its a match
  // How do you know if its the second click...?
  // One strategy is to check if cards.length is even or odd...
    // if(cards.length === 3 || cards.length === 1){
      // checkIfItIsAMatch();
    // }
// }
// function checkIfItIsAMatch(){
  //here we check the background-image of each card is it showing the back or front
  //if showing front of both cards then is the background-image ==?
  // if()
// }



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
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = '<img src="king card.jpg"/>';
	}
	else {
		this.innerHTML = '<img src="queen card.jpg">';
	}
	if (cardsInPlay.length === 2) {
	isMatch(cardsInPlay);
	cardsInPlay = [];
	}
}

function isMatch(cards) {
	if (cards[0] === cards[1]) {
	alert("You found a match!");
	}
	else {
	alert("Sorry, try again!");
	}
}

createBoard();
