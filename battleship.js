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

	multiDim[0][1] = "@"
	multiDim[0][2] = "@"
	multiDim[0][3] = "@"
	multiDim[0][4] = "@"
	multiDim[4][1] = "@"
	multiDim[5][1] = "@"
	multiDim[6][1] = "@"

	//===================AIRCRAFT CARRIER========================
	//==horizontal==
	var countHrz=0
	while(countHrz<=5) {
		randomPos=[Math.floor(Math.random()*10),Math.floor(Math.random()*10)]
		var tmpCoorXhrz=[]
		var tmpCoorYhrz=[]
		//console.log("xxxx")
		for(let j=0;j<5;j++) {
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

	// for(let i=0;i<tmpCoorXhrz.length;i++) {
	// 	multiDim[tmpCoorXhrz[i]][tmpCoorYhrz[i]] = "x"
	// }

	//==vertikal==

	var countVer=0
	while(countVer<=5) {
		randomPos=[Math.floor(Math.random()*10),Math.floor(Math.random()*10)]
		var tmpCoorXver=[]
		var tmpCoorYver=[]
		//console.log("xxxx")
		for(let j=0;j<5;j++) {
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

	// for(let i=0;i<tmpCoorXver.length;i++) {
	// 	multiDim[tmpCoorXver[i]][tmpCoorYver[i]] = "x"
	// }


	//shufling
	
	var probRand=Math.round(Math.random())

	if(probRand == 0) {
		for(let i=0;i<tmpCoorXhrz.length;i++) {		
			multiDim[tmpCoorXhrz[i]][tmpCoorYhrz[i]] = "x"
		}	
	}else {
		for(let i=0;i<tmpCoorXver.length;i++) {
			multiDim[tmpCoorXver[i]][tmpCoorYver[i]] = "x"
		}
	}
	
		
return multiDim	
}

function generateShip() {


	
} 

console.log(generateBoard());
var multiDim = generateBoard()
