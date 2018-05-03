function randomAlpha(){
  var str = "ABCDEFGHIJ";
  var row = str.split("");
  var ranAlpha = row[Math.floor(Math.random() * row.length)];

  return ranAlpha;
}

function randomNum(){
  var col = [1,2,3,4,5,6,7,8,9,10];
  var ranNum = col[Math.floor(Math.random() * col.length)];

  return ranNum - 1;
}

function getShips(board, char){
  var str = "ABCDEFGHIJ";
  var row = str.split("");
  var repeat = 0;
  if(char === "a"){
    repeat = 5;
  }
  else if(char === "b"){
    repeat = 4;
  }

  else if(char === "c"){
    repeat = 3;
  }
  else if(char === "d"){
    repeat = 2;
  }


  var alpha = randomAlpha();
  var y = randomNum();
  var x = row.indexOf(alpha);


 var isTrue = [false, false, false, false]; //down, up, right, left
 var countDown = 0;
 var countUp = 0;
 var countRight = 0;
 var countLeft = 0;

  for(let i = 0 ; i < repeat; i++){
    if((board[x+1][y] === " " )&&  board[x+i] !== undefined){
      countDown++;
      x++
    }
    if((board[x-1][y] === " ") && board[x-i] !== undefined){
      countUp++;
      x--;
    }
    if((board[x][y+1] === " ") && board[y+i] !== undefined){
      countRight++;
      y++;
    }
    if((board[x][y-1] === " " )&& board[y-i] !== undefined){
      countLeft++;
      y--;
    }
  }

  if(countDown === repeat){
    isTrue[0] = true;
  }
  if(countUp === repeat){
    isTrue[1] = true;
  }
  if(countRight === repeat){
    isTrue[2] = true;
  }
  if(countLeft === repeat){
    isTrue[3] = true;
  }
  console.log("------" + repeat);
  console.log(isTrue);
  if(isTrue[0] === true){
    for(let i = 0; i < repeat; i++){
        board[x][y] = char;
        board[x+i][y] = char;
    }
  }
  else if(isTrue[1] === true){
    for(let i = 0; i < repeat; i++){
        board[x][y] = char;
        board[x-i][y] = char;
    }
  }
  else if(isTrue[2] === true){
    for(let i =0; i < repeat; i++){
        board[x][y] = char;
        board[x][y+i] = char;
    }
  }
  else if(isTrue[3] === true){
    for(let i =0; i < repeat; i++){

        board[x][y] = char;
        board[x][y-i] = char;
    }
  }

  return board;
}

function battleship(){
  var str = "ABCDEFGHIJ";
  var row = str.split("");
  // var a = 5; //Aircraft carrier
  // var b = 4 //Battleship
  // var c = 3 // Cruiser
  // var d = 2 // Destroyer
  var board = []
  for(var i = 0; i < 10; i++){
    board.push([]);
  }

  for(var i = 0; i < board.length; i++){
    for(var k = 0; k < 10; k++){
      board[i].push(" ");
    }
  }

  getShips(board,"a");

  getShips(board,"b");

  getShips(board,"c");

  getShips(board,"d");
  console.log(board);

}

console.log(battleship());
