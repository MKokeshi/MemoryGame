console.log("Attivo e runnato");

var cards = [
    {
        rank: "Regina",
        suit: "Cuori", 
        cardImage: "images/queen-of-hearts.png",
    },
    {
        rank: "Regina",
        suit: "Diamanti", 
        cardImage: "images/queen-of-diamonds.png",
    },
    {
        rank: "Re",
        suit: "Cuori", 
        cardImage: "images/king-of-hearts.png",
    },
    {
        rank: "Re",
        suit: "Diamanti", 
        cardImage: "images/king-of-diamonds.png",
    }
    ];
    
    var cardsInPlay = [];
    
    function createBoard() {
        for (var i = 0; i < cards.length; i++) {
            var cardElement = document.createElement ('img');
                cardElement.setAttribute('src', 'images/back.png');
                cardElement.setAttribute('data-id', i);
                cardElement.addEventListener('click', flipCard);
                document.getElementById('game-board').appendChild(cardElement)
        }
    
    }
    
    function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("Hai trovato un match!"); 
    } else {
        alert("Riprova!");
    }
    }
    
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        console.log("User flipped " + cards[cardId].rank);
        console.log(cards[cardId].cardImage);
        cardsInPlay.push(cards[cardId].rank);
        this.setAttribute('src', cards[cardId].cardImage);
    if (cardsInPlay.length ===2) {
        checkForMatch ();
    
    }
    }
    
    createBoard();
    
    
    
    