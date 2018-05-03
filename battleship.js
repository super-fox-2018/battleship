// Your code here
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// create ships data
let ships = [{
  name: 'Aircraft carrier',
  location: [],
  size: 5,
  hit: 0
}, {
  name: 'Battleship',
  location: [],
  size: 4,
  hit: 0
}, {
  name: 'Cruiser',
  location: [],
  size: 3,
  hit: 0
}, {
  name: 'Destroyer',
  location: [],
  size: 2,
  hit: 0
}]

function generateBoard(size) {
  let board = [];

  for (let i = 0; i < size; i++) {
    let column = [];
    for (let j = 0; j < size; j++) {
      column.push(' ');
    }
    board.push(column);
  }
  return board;
}

function generateShip() {

}

function attack() {
  
} 

function playBattleship() {
  let length = 10;
  //generateBoard(length)
  //generateShip()
}

playBattleship();