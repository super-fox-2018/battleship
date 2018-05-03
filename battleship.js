function board(row,cell) {
  var board = [];
  var name_row = '*abcdefghijklmnopqrstuvwxyz';
  for (var i = 0; i <= row; i++) {
    var rows = [];
    for (var j = 0; j <= cell; j++) {
      if (j==0) {
        rows.push(name_row[i]);
      }
      else if (i==0) {
        rows.push(j);
      }
      else {
        rows.push(' ');
      }
    }
    board.push(rows);
  }
  return board;
}



// console.log(board(10,10));

function ship(){
  var papan = board(10,10);
  var a = 5; //Aircraft carrier
  var b = 4; //Battleship
  var c = 3; //Cruiser
  var d = 2; //Destroyer
  var asd = true;
  //Aircraft
  while(asd==true){
    var random_row = Math.floor(Math.random()*10);
    var random_cell = Math.floor(Math.random()*10);
    var row_row = [];
    // var row_cell = [];
    // var cell_row = [];
    var cell_cell = [];
    for (var i = 0; i < a; i++) {
      if (papan[random_row+i][random_cell]===' ') {
        row_row.push(random_row+i);
      }
      if (papan[random_row][random_cell+i]===' ') {
        cell_cell.push(random_cell+i);
      }

      // console.log(random+''+random);
      // }
    }
    // console.log(row_row);
    if (row_row.length==a||cell_cell.length==a) {
      if(row_row.length==a){
        for (var i = 0; i < a; i++) {
          papan[row_row[i]][random_cell]='a';
          // console.log(row_row[i]);
        }
      }
      else if (cell_cell.length==a) {
        for (var i = 0; i < a; i++) {
          papan[random_row][cell_cell[i]]='a';
        }
      }
      asd=false;
    }
  }
  //Battleship
  asd=true;
  while(asd==true){
    var random_row = Math.floor(Math.random()*10);
    var random_cell = Math.floor(Math.random()*10);
    var row_row = [];;
    var cell_cell = [];
    for (var i = 0; i < b; i++) {
      if (papan[random_row+i][random_cell]===' ') {
        row_row.push(random_row+i);
      }
      if (papan[random_row][random_cell+i]===' ') {
        cell_cell.push(random_cell+i);
      }
    }
    // console.log(row_row);
    if (row_row.length==b||cell_cell.length==b) {
      if(row_row.length==b){
        for (var i = 0; i < b; i++) {
          papan[row_row[i]][random_cell]='b';
        }
      }
      else if (cell_cell.length==b) {
        for (var i = 0; i < b; i++) {
          papan[random_row][cell_cell[i]]='b';
        }
      }
      asd=false;
    }
  }
  //Cruiser
  asd=true;
  while(asd==true){
    var random_row = Math.floor(Math.random()*10);
    var random_cell = Math.floor(Math.random()*10);
    var row_row = [];;
    var cell_cell = [];
    for (var i = 0; i < c; i++) {
      if (papan[random_row+i][random_cell]===' ') {
        row_row.push(random_row+i);
      }
      if (papan[random_row][random_cell+i]===' ') {
        cell_cell.push(random_cell+i);
      }
    }
    // console.log(row_row);
    if (row_row.length==c||cell_cell.length==c) {
      if(row_row.length==c){
        for (var i = 0; i < c; i++) {
          papan[row_row[i]][random_cell]='c';
        }
      }
      else if (cell_cell.length==c) {
        for (var i = 0; i < c; i++) {
          papan[random_row][cell_cell[i]]='c';
        }
      }
      asd=false;
    }
  }
  //Destroyer
  asd=true;
  while(asd==true){
    var random_row = Math.floor(Math.random()*10);
    var random_cell = Math.floor(Math.random()*10);
    var row_row = [];;
    var cell_cell = [];
    for (var i = 0; i < d; i++) {
      if (papan[random_row+i][random_cell]===' ') {
        row_row.push(random_row+i);
      }
      if (papan[random_row][random_cell+i]===' ') {
        cell_cell.push(random_cell+i);
      }
    }
    // console.log(row_row);
    if (row_row.length==d||cell_cell.length==d) {
      if(row_row.length==d){
        for (var i = 0; i < d; i++) {
          papan[row_row[i]][random_cell]='d';
        }
      }
      else if (cell_cell.length==d) {
        for (var i = 0; i < d; i++) {
          papan[random_row][cell_cell[i]]='d';
        }
      }
      asd=false;
    }
  }
  return papan;
}


function startGame(target) {
  var board_display = board(10,10);
  var board_game = ship();

    if(board_game[target[0]][target[1]]!==' '){
      board_display[target[0]][target[1]]=board_game[target[0]][target[1]];
    }
    return board_game;
}
console.log(startGame('32'));
