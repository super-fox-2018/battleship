// Your code here

function generateBoard() {
var multiDim=[];
var store='';	
	for(var i=0;i<10;i++) {
			var arr=[];
		for(var j=0;j<10;j++) {
			//store+="s"
			arr.push(' ');
		}	
	multiDim.push(arr);
	store='';	
	}

	generateShip(multiDim,"=",5) // aircraft
	generateShip(multiDim,"+",4) // battleship
	generateShip(multiDim,"@",3) // cruiser
	generateShip(multiDim,"*",2) // destroyer


return multiDim	
}


function generateShip(multiDim,shipSymbol,shipAdd) {
	//==horizontal==
	var countHrz=0
	while(countHrz<=shipAdd) {
		randomPos=[Math.floor(Math.random()*10),Math.floor(Math.random()*10)]
		var tmpCoorXhrz=[]
		var tmpCoorYhrz=[]
		//console.log("xxxx")
		for(let j=0;j<shipAdd;j++) {
			//console.log(randomPos[0]+j,randomPos[1])
			if(randomPos[0]+j <=9 && randomPos[0]+j >=0 && randomPos[1]<=9 && randomPos[1]>=0 && multiDim[randomPos[0]+j][randomPos[1]] == " ") {
					tmpCoorXhrz.push(randomPos[0]+j)
				 	tmpCoorYhrz.push(randomPos[1])
				 	//multiDim[randomPos[0]+j][randomPos[1]] = "x"
				 	countHrz++	
			}else{
				countHrz=0
			}	
		}	
	}
	//==vertikal==

	var countVer=0
	while(countVer<=shipAdd) {
		randomPos=[Math.floor(Math.random()*10),Math.floor(Math.random()*10)]
		var tmpCoorXver=[]
		var tmpCoorYver=[]
		//console.log("xxxx")
		for(let j=0;j<shipAdd;j++) {
			//console.log(randomPos[0]+j,randomPos[1])
			if(randomPos[0] <=9 && randomPos[0] >=0 && randomPos[1]+j<=9 && randomPos[1]+j>=0 && multiDim[randomPos[0]][randomPos[1]+j] == " ") {
					tmpCoorXver.push(randomPos[0])
				 	tmpCoorYver.push(randomPos[1]+j)
				 	//multiDim[randomPos[0]+j][randomPos[1]] = "x"
				 	countVer++	
			}else{
				countVer=0
			}	
		}	
	}
	//shufling
	
	var probRand=Math.round(Math.random())

	if(probRand == 0) {
		for(let i=0;i<tmpCoorXhrz.length;i++) {		
			multiDim[tmpCoorXhrz[i]][tmpCoorYhrz[i]] = shipSymbol
		}	
	}else {
		for(let i=0;i<tmpCoorXver.length;i++) {
			multiDim[tmpCoorXver[i]][tmpCoorYver[i]] = shipSymbol
		}
	}

	//return multiDim
}



function shotShip(generateBoard,coordinat) {
 var shotBoard = generateBoard
 var aircraft = 5 // =
 var battleship = 4 // +
 var cruiser = 3 // @
 var destroyer = 2 // *
 for(let i=0;i<coordinat.length;i++) {
 	if(shotBoard[coordinat[i][0]][coordinat[i][1]] == ' ') {
 		
 		shotBoard[coordinat[i][0]][coordinat[i][1]] = '/'
 	}else {
 		if(shotBoard[coordinat[i][0]][coordinat[i][1]] == "="){
 			shotBoard[coordinat[i][0]][coordinat[i][1]] = 'X'
 			aircraft--
 			console.log(`aircraft tertembak, sisa kapal ${aircraft}`)	
 		}

 		if(shotBoard[coordinat[i][0]][coordinat[i][1]] == "+"){
 			shotBoard[coordinat[i][0]][coordinat[i][1]] = 'X'
 			battleship--
 			console.log(`battleship tertembak, sisa kapal ${battleship}`)	
 		}

 		if(shotBoard[coordinat[i][0]][coordinat[i][1]] == "@"){
 			shotBoard[coordinat[i][0]][coordinat[i][1]] = 'X'
 			cruiser--
 			console.log(`cruiser tertembak, sisa kapal ${cruiser}`)	
 		}

 		if(shotBoard[coordinat[i][0]][coordinat[i][1]] == "*"){
 			shotBoard[coordinat[i][0]][coordinat[i][1]] = 'X'
 			destroyer--
 			console.log(`destroyer tertembak, sisa kapal ${destroyer}`)	
 		}
 		
 	}
 }

 if(aircraft == 0 && battleship == 0 && cruiser ==0 && destroyer ==0) {
 	console.log("selamat anda menang!")
 }

//shotBoard[0][1]="X"

return shotBoard
} 

var argv = process.argv
var shot = argv.slice(2)
var board = generateBoard()


if(argv[2] == undefined) {
	console.log("isi koordinat terlebih dahulu dengan contoh sbb:")
	console.log(`00 --> baris 0,kolom 0`)
	console.log(`31 --> baris 3, kolom 1`)
	console.log(`51 --> baris 5 kolom 1`)
	console.log(`note: maksimal baris dan kolom = 9, minimal baris dan kolom = 0 `)
	console.log(board)
}else{
    console.log(board);
	console.log("==============TEMBAKK!!=================")
	var shotBoard = shotShip(board,shot)
	console.log(shotBoard)
}









