let boardSize = 8;
let boardArray = [];

for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
        boardArray.push({ xValue: i, yValue: j });
    }
}

let setUpBoard = function(){
    let whitePiece1X = 0;
    let whitePiece1Y = 0;
    let whitePiece1OnBoard = document.getElementById(`${whitePiece1X}${whitePiece1Y}`);
    whitePiece1OnBoard.innerHTML = '<img class="square" src="draughts/white-piece.jpg">';

    let whitePiece2X = 0;
    let whitePiece2Y = 2;
    let whitePiece2OnBoard = document.getElementById(`${whitePiece2X}${whitePiece2Y}`);
    whitePiece2OnBoard.innerHTML = '<img class="square" src="draughts/white-piece.jpg">';

    let whitePiece3X = 0;
    let whitePiece3Y = 4;
    let whitePiece3OnBoard = document.getElementById(`${whitePiece3X}${whitePiece3Y}`);
    whitePiece3OnBoard.innerHTML = '<img class="square" src="draughts/white-piece.jpg">';

    let whitePiece4X = 0;
    let whitePiece4Y = 6;
    let whitePiece4OnBoard = document.getElementById(`${whitePiece4X}${whitePiece4Y}`);
    whitePiece4OnBoard.innerHTML = '<img class="square" src="draughts/white-piece.jpg">';

    let whitePiece5X = 1;
    let whitePiece5Y = 1;
    let whitePiece5OnBoard = document.getElementById(`${whitePiece5X}${whitePiece5Y}`);
    whitePiece5OnBoard.innerHTML = '<img class="square" src="draughts/white-piece.jpg">';

    let whitePiece6X = 1;
    let whitePiece6Y = 3;
    let whitePiece6OnBoard = document.getElementById(`${whitePiece6X}${whitePiece6Y}`);
    whitePiece6OnBoard.innerHTML = '<img class="square" src="draughts/white-piece.jpg">';

    let whitePiece7X = 1;
    let whitePiece7Y = 5;
    let whitePiece7OnBoard = document.getElementById(`${whitePiece7X}${whitePiece7Y}`);
    whitePiece7OnBoard.innerHTML = '<img class="square" src="draughts/white-piece.jpg">';

    let whitePiece8X = 1;
    let whitePiece8Y = 7;
    let whitePiece8OnBoard = document.getElementById(`${whitePiece8X}${whitePiece8Y}`);
    whitePiece8OnBoard.innerHTML = '<img class="square" src="draughts/white-piece.jpg">';

    let whitePiece9X = 2;
    let whitePiece9Y = 0;
    let whitePiece9OnBoard = document.getElementById(`${whitePiece9X}${whitePiece9Y}`);
    whitePiece9OnBoard.innerHTML = '<img class="square" src="draughts/white-piece.jpg">';

    let whitePiece10X = 2;
    let whitePiece10Y = 2;
    let whitePiece10OnBoard = document.getElementById(`${whitePiece10X}${whitePiece10Y}`);
    whitePiece10OnBoard.innerHTML = '<img class="square" src="draughts/white-piece.jpg">';

    let whitePiece11X = 2;
    let whitePiece11Y = 4;
    let whitePiece11OnBoard = document.getElementById(`${whitePiece11X}${whitePiece11Y}`);
    whitePiece11OnBoard.innerHTML = '<img class="square" src="draughts/white-piece.jpg">';

    let whitePiece12X = 2;
    let whitePiece12Y = 6;
    let whitePiece12OnBoard = document.getElementById(`${whitePiece12X}${whitePiece12Y}`);
    whitePiece12OnBoard.innerHTML = '<img class="square" src="draughts/white-piece.jpg">';


    let blackPiece1X = 7;
    let blackPiece1Y = 1;
    let blackPiece1OnBoard = document.getElementById(`${blackPiece1X}${blackPiece1Y}`);
    blackPiece1OnBoard.innerHTML = '<img class="square" src="draughts/black-piece.png">';

    let blackPiece2X = 7;
    let blackPiece2Y = 3;
    let blackPiece2OnBoard = document.getElementById(`${blackPiece2X}${blackPiece2Y}`);
    blackPiece2OnBoard.innerHTML = '<img class="square" src="draughts/black-piece.png">';

    let blackPiece3X = 7;
    let blackPiece3Y = 5;
    let blackPiece3OnBoard = document.getElementById(`${blackPiece3X}${blackPiece3Y}`);
    blackPiece3OnBoard.innerHTML = '<img class="square" src="draughts/black-piece.png">';

    let blackPiece4X = 7;
    let blackPiece4Y = 7;
    let blackPiece4OnBoard = document.getElementById(`${blackPiece4X}${blackPiece4Y}`);
    blackPiece4OnBoard.innerHTML = '<img class="square" src="draughts/black-piece.png">';

    let blackPiece5X = 6;
    let blackPiece5Y = 0;
    let blackPiece5OnBoard = document.getElementById(`${blackPiece5X}${blackPiece5Y}`);
    blackPiece5OnBoard.innerHTML = '<img class="square" src="draughts/black-piece.png">';

    let blackPiece6X = 6;
    let blackPiece6Y = 2;
    let blackPiece6OnBoard = document.getElementById(`${blackPiece6X}${blackPiece6Y}`);
    blackPiece6OnBoard.innerHTML = '<img class="square" src="draughts/black-piece.png">';

    let blackPiece7X = 6;
    let blackPiece7Y = 4;
    let blackPiece7OnBoard = document.getElementById(`${blackPiece7X}${blackPiece7Y}`);
    blackPiece7OnBoard.innerHTML = '<img class="square" src="draughts/black-piece.png">';

    let blackPiece8X = 6;
    let blackPiece8Y = 6;
    let blackPiece8OnBoard = document.getElementById(`${blackPiece8X}${blackPiece8Y}`);
    blackPiece8OnBoard.innerHTML = '<img class="square" src="draughts/black-piece.png">';

    let blackPiece9X = 5;
    let blackPiece9Y = 1;
    let blackPiece9OnBoard = document.getElementById(`${blackPiece9X}${blackPiece9Y}`);
    blackPiece9OnBoard.innerHTML = '<img class="square" src="draughts/black-piece.png">';

    let blackPiece10X = 5;
    let blackPiece10Y = 3;
    let blackPiece10OnBoard = document.getElementById(`${blackPiece10X}${blackPiece10Y}`);
    blackPiece10OnBoard.innerHTML = '<img class="square" src="draughts/black-piece.png">';

    let blackPiece11X = 5;
    let blackPiece11Y = 5;
    let blackPiece11OnBoard = document.getElementById(`${blackPiece11X}${blackPiece11Y}`);
    blackPiece11OnBoard.innerHTML = '<img class="square" src="draughts/black-piece.png">';

    let blackPiece12X = 5;
    let blackPiece12Y = 7;
    let blackPiece12OnBoard = document.getElementById(`${blackPiece12X}${blackPiece12Y}`);
    blackPiece12OnBoard.innerHTML = '<img class="square" src="draughts/black-piece.png">';
}

let startNewGame = document.getElementById('start-button');

startNewGame.onclick = function () {
    setUpBoard();
}

setUpBoard();
