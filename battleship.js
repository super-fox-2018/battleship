// Your code here

const readline = require('readline'); 

const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 
  }); 

  function board(){
    var array=[]
    var numrow=0
    var numcolumn=1
    for(var i=0; i<11; i++){
        array.push([])
        for(var j=0; j<11; j++){
         if(i==0){
           array[i].push(numrow)
           numrow++
         }else if(j==0){
           array[i].push(numcolumn)
           numcolumn++
         }else{
           array[i].push(" ")
         }
        }
    }
    return array
}

var Battleships = () =>{
    return [
        {Name: 'Destroyer', Size: 2},
        {Name: 'Cruiser', Size: 3},
        {Name: 'Battleship', Size: 4},
        {Name: 'Aircraft Carrier', Size: 5}
        ]
}
var putShip = (array)=>{
    var board = array;
    var Battleship = Battleships()
    var EnemySpotted = []
    var generateBattleship= parseInt(Math.random()*3+1)
    var orientasi=['horizontal','vertikal']
    for(i=0;i<generateBattleship;i++){
        var pickShipRandomly = parseInt(Math.random()*Battleship.length-1)
        var checkingAvailability = true
        while(checkingAvailability){
            if(EnemySpotted.indexOf(Battleship[pickShipRandomly])>=0){
                pickShipRandomly = parseInt(Math.random()*Battleship.length-1)
            }else{
                checkingAvailability = false
            }
        }
        EnemySpotted.push(Battleship[pickShipRandomly])
    }
    for(i=0;i<EnemySpotted.length;i++){
        orient = orientasi[Math.round(Math.random())]
        rowstart = parseInt(Math.random()*9+1)
        columnstart = parseInt(Math.random()*9+1)
        if(rowstart>10-EnemySpotted[i]['Size']){
            rowstart-=EnemySpotted[i]['Size']
        }
        if(columnstart>10-EnemySpotted[i]['Size']){
            columnstart-=EnemySpotted[i]['Size']
        }
        for(j=1;j<=EnemySpotted[i]['Size'];j++){
            if(orient == 'horizontal'){
                if(checkSpotAvailability(board[rowstart][columnstart+j])){
                    temp = board[rowstart][columnstart+j]
                    for(n=columnstart+j-1;n>=columnstart;n--){
                        board[rowstart][n]=' '
                    }
                    board[rowstart][columnstart+j] = temp
                    orient = orientasi[Math.round(Math.random())]
                    columnstart = parseInt(Math.random()*9+1)
                    if(columnstart>10-EnemySpotted[i]['Size']){
                        columnstart-=EnemySpotted[i]['Size']
                    }
                    j=0
                }else{                
                    board[rowstart][columnstart+j]=checkBattleshipType(EnemySpotted[i]['Name'])
                }
            }else{
                if(checkSpotAvailability(board[rowstart+j][columnstart])){
                    temp = board[rowstart+j][columnstart]
                    for(n=rowstart+j-1;n>=rowstart;n--){
                        board[n][columnstart]=' '
                    }
                    board[rowstart+j][columnstart] = temp
                    orient = orientasi[Math.round(Math.random())]
                    rowstart = parseInt(Math.random()*9+1)
                    if(rowstart>10-EnemySpotted[i]['Size']){
                        rowstart-=EnemySpotted[i]['Size']
                    }
                    j=0
                }else{
                    board[rowstart+j][columnstart]=checkBattleshipType(EnemySpotted[i]['Name'])
                }
            }
        }
    }
    return board
}

var checkSpotAvailability = spot =>{
    if(spot == 'A' || spot == 'B' || spot == 'C' || spot == 'D') return true

    return false
}

var checkBattleshipType = boatName =>{
    if(boatName=='Aircraft Carrier'){
        return 'A'
    }else if(boatName=='Battleship'){
        return 'B'
    }else if(boatName=='Cruiser'){
        return 'C'
    }else if(boatName=='Destroyer'){
        return 'D'
    }
}




var board = putShip(board())
var pertanyakankolom = (board,shipsAvailable)=>{
    if(shipsAvailable==undefined){
        shipsAvailable = []
        var shipschecker = []
        for(i = 0; i < board.length; i++){
            for(j = 0; j < board[i].length; j++){
                if(board[i][j] == 'A'&& shipschecker.indexOf('A') < 0 ){
                    shipsAvailable.push(['A','Aircraft Carrier',5])
                    shipschecker.push('A')
                }else if(board[i][j] == 'B' &&  shipschecker.indexOf('B') < 0){
                    shipsAvailable.push(['B','Battleship',4])
                    shipschecker.push('B')
                }else if(board[i][j] == 'C' && shipschecker.indexOf('C') < 0){
                    shipsAvailable.push(['C','Cruiser',3])
                    shipschecker.push('C')
                }else if(board[i][j] == 'D' && shipschecker.indexOf('D') < 0){
                    shipsAvailable.push(['D','Destroyer',2])
                    shipschecker.push('D')
                }
            }
        }
    }else{
        for(i = 0; i < shipsAvailable.length; i++){
            if(shipsAvailable[i][2]==0){
                console.log(shipsAvailable[i][1]+" has been destroyed!")
                shipsAvailable.splice(i,1)
            }
        }
    }
    for(i=0;i<board.length;i++){
        var stat=true
        for(j=0;j<board[i].length;j++){
            if(checkSpotAvailability(board[i][j])){
                console.log(board)
                rl.question('masukkan column: ',function(answer){
        
                    pertanyakanrow(answer,board,shipsAvailable)
                })
                stat=false
                break;
            }else if(i==board.length-1 && j==board[i].length-1 && !checkSpotAvailability(board[i][j])){
                console.log(board)
                console.log("you won :D") 
                rl.close();
            }
        }
        if(stat==false){
            break;
        }
    }

}

var pertanyakanrow = (kolomjawab,board,shipsAvailable)=>{

    rl.question('masukkan row: ',function(answer){
        if(checkSpotAvailability(board[answer][kolomjawab])){
            console.log('\n\n\n')
            for(i = 0; i < shipsAvailable.length; i++){
                if(board[answer][kolomjawab]==shipsAvailable[i][0]){shipsAvailable[i][2]--
                    console.log('enemy\'s '+shipsAvailable[i][1]+' has been attacked!')
                    break;  
                }
            }
            board[answer][kolomjawab] = 'O'
            pertanyakankolom(board,shipsAvailable)
        }else if(board[answer][kolomjawab]==' '){
            console.log('\n\n\n')
            console.log("salah! coba lagi")
            board[answer][kolomjawab] = 'X'
            pertanyakankolom(board,shipsAvailable)
        }else{
            console.log('\n\n\n')
            console.log("sudah ditebak")
            pertanyakankolom(board,shipsAvailable)
        }
    })
}

pertanyakankolom(board)