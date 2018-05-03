let argv = process.argv;
let coordinate = argv[2];

var ships = [{
  name: 'Aircraft Carrier',
  size: 5,
  location: []
},{
  name: 'Battleship',
  size: 4,
  location: []
},{
  name: 'Cruiser',
  size: 3,
  location: []
},{
  name: 'Destroyer',
  size: 2,
  location: []
}];

function generateBoard(length) {
  let board = [];
  for (let row = 0; row < length; row++) {
    board.push([]);
    for (let col = 0; col < length; col++) {
      board[row].push(' ');
    }
  }
  return board;
}

function startGame() {
  let boardLength = 10;
  let board = generateBoard(boardLength);
  let shipLocationArray = [];

  while (collision(shipLocationArray) === true) {
    shipLocationArray = [];
    shipLocationArray = createAllShips(boardLength);
  }

  board = printShip(shipLocationArray, board);

  for (let i = 2; i < argv.length; i++) {
    let attackCoordinate = shoot(argv[i]);
    let hitRow = attackCoordinate[0];
    let hitCol = attackCoordinate[1];
    if (board[hitRow][hitCol] === '!') { // '/' = hit, 'X' = miss
      board[hitRow][hitCol] = '/';
    } else {
      board[hitRow][hitCol] = 'X';
    }
  }
  return board;
}

function collision(array) {
  if (array.length === 0) {
    return true;
  }
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    counter = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        counter += 1;
      }
    }
    if (counter > 1) {
      return true;
    }
  }
  return false;
}

function createAllShips(length) {
  let shipLocationArray = [];
  for (let i = 0; i < ships.length; i++) {
    createShip(i, length);
  }

  for (let i = 0; i < ships.length; i++) {
    for (let j = 0; j < ships[i].location.length; j++) {
      shipLocationArray.push(ships[i].location[j]);
    }
  }
  return shipLocationArray;
}

function createShip(index, length) {
  ships[index].location = [];
  let shipDirection = Math.floor(Math.random() * 2); // 0 = Horizontal, 1 = Vertical
  let row = 0;
  let col = 0;
  if (shipDirection === 1) {
    row = Math.floor(Math.random() * ((length - 1) - ships[index].size));
    col = Math.floor(Math.random() * (length - 1));
  } else {
    row = Math.floor(Math.random() * (length - 1));
    col = Math.floor(Math.random() * ((length - 1) - ships[index].size));
  }
  for (let i = 0; i < ships[index].size; i++) {
    if (shipDirection === 1) {
      ships[index].location.push((row + i) + '' + col);
    } else {
      ships[index].location.push(row + '' + (col + i));
    }
  }
}

function printShip(array, board) {
  let newShipLocationArray = [];
  for (let i = 0; i < array.length; i++) {
    newShipLocationArray.push(array[i].split(''));
    let row = Number(newShipLocationArray[i][0]);
    let col = Number(newShipLocationArray[i][1]);
    board[row][col] = '!';
  }
  return board;
}

function shoot(spot) {
  let alphabet = 'ABCDEFGHIJ';
  let spotArray = spot.split('');
  let row = alphabet.indexOf(spotArray[0]);
  let col = Number(spotArray[1]);
  return [row, col];
}

console.log(startGame());
console.log(ships);
