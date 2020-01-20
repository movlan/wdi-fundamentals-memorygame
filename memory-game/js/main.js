let cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-diamonds.png"
},
];
let cardsInPlay = [];
let score = 0;


function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		const cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		score++;
		document.getElementById('score').innerHTML = score;
		setTimeout(flipBack, 500);
	} else {
		score = 0;
		document.getElementById('score').innerHTML = score;
		setTimeout(flipBack, 500);
	}
};

function flipBack () {
	const myNode = document.getElementById("game-board");
	while (myNode.firstChild) {
		myNode.removeChild(myNode.firstChild);
	};
	createBoard();
	cardsInPlay = [];
}

function flipCard() {
	if (cardsInPlay.length < 2) {
	const cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	} else {
		checkForMatch();
	}
};

document.getElementById('bRes').addEventListener("click", clickFn);
function clickFn() {
	flipBack();
};

createBoard();