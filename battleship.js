// Your code here
function randowPlace(num){
    var number = 0;
    while(number === 0){
        number = Math.floor(Math.random()*num) 
    }
   return  number;
}

function generateRandomAlp(num1, num2){
    var label = '*abcdefghijklmnopqrstuvwxyz'
    var row = num1;
    var col = num2;
    var arr = [];
    
    for(let a=0; a<=row; a++){
        arr.push([]) ;
        for(let b=0; b<=col; b++){
            arr[a].push(" ");
          if(a===0){
            arr[a][b] = label[b];
          }
        }
    }

    for(let a=0; a< arr.length; a++){
        if(a>0){
            arr[a][0] = a;
        }    
    }
    return(arr);
}

function clearVertical(row, col, size){
        for(let a=0; a < size; a++){
          if(row+a > theBoard.length-1 ||theBoard[row+a][col] !== ' '){
            return false;
          }  
        }
        return true;
    }
    
function clearHorizontal(row, col, size){
         for(let a=0; a< size; a++){
          if(col+a > theBoard.length-1 ||theBoard[row][col+a] !== ' '){
            return false;
          }  
        }
        return true;
    }

function printShipVert (row, col, size, ship){
    for(let a=0; a<size; a++ ){
        theBoard[row+a][col] = ship;       
    }
}

function printShipHorz (row, col, size, ship){
    for(let a=0; a<size; a++ ){
        theBoard[row][col+a] = ship;       
    }
}

function showTheShip(){
  
    for(let a=0; a<ship.length;a++){
      console.log(ship[a])
        var row = randowPlace(9);
        var col = randowPlace(9);
        var shipGen = ship[a]; 
        
        if(clearVertical(row, col, shipGen.size)){
            printShipVert(row, col, shipGen.size, shipGen.name);
        }
        
        if(clearHorizontal(row, col, shipGen.size)){
            printShipHorz(row, col, shipGen.size, shipGen.name);
        }
    }
    
    return theBoard;
}

//===============end of function======================================//


var theBoard = generateRandomAlp(10,10);

var AC = {}
    AC.name = 'AC';
    AC.size = 5;
    AC.counter = 0;
    

var B = {}
    B.name = 'B';
    B.size = 4;
    B.counter = 0;
    
    
var C = {}
    C.name = 'C'
    C.size = 3;
    C.counter = 0;
    

var D = {}
    D.name = 'D';
    D.size = 2;
    D.counter = 0;
        
var ship = [AC, B, C, D ];

console.log('\n')

//theBoard[1][1]='AC';
//console.log(theBoard);
console.log(showTheShip())

var argv = process.argv;
var rowPlayer = argv[2];
var colPlayer = argv[3];


function findCol(colPlayer){
    var labelPlay = '*abcdefghijklmnopqrstuvwxyz'
    for(let a=0; a<labelPlay.length; a++){
        if(colPlayer===labelPlay[a]){
            return a;
        }
    }
}
//console.log(rowPlayer, findCol(colPlayer));

function checkTarget(row, col){
    if(theBoard[row][col]!==' '){
        return 'kamu berhasil menenggelamkan ' + theBoard[row][col] +'\n'+'SELAMAT KAMU MENANG';
    }else{
        return 'coba lagi'
    }
}

console.log(checkTarget(rowPlayer, findCol(colPlayer)));
//test gunakan koordinat 1 a