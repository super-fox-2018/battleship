function battle(){
    var table=[]
    for (let i=0; i<10; i++){
        var arrKecil=[]
        for (let j=0; j<10; j++){
            arrKecil.push(" ")
        }
        table.push(arrKecil)
    }
    return table
}

function row(){
    var indexRow = Math.floor(Math.random() * 6) +1 
    // console.log(indexRow)
    for(let i=0;i<10;i++){
        if(i==indexRow){
            return i
        }
    }
}

function col() {
    var indexCol = Math.floor(Math.random() * 6) + 1
    for (let i = 0; i < 10; i++) {
        if (i == indexCol) {
            return i
        }
    }
}

function shipPosition(){
    var size=[5,4,3,2]
    var ship=["A","B","C","D"]
    var acak=Math.floor(Math.random() * ship.length)+1 // random buat dapetin berapa ship yg akan kluar
    var randomShip= ship; // untuk ship nya
        randomShip.sort(function(){
            return 0.5 - Math.random()
        })
    var postShip= randomShip.slice(0,acak) // ini dipakai buat ambil ship apa aja yg akan kluar setelah splice yg diambil dari randomShip
    // console.log("===",acak)
    // console.log(".....",randomShip)
    // console.log("---",postShip)
    // udh ktmu random n ship apa aja yg d ambil, trus lakukan looping untuk ship
    // if index ship[i] itu ada di postShip trus push postShip sebnyak dgn dr sizenya masing" ke dlm array table dlm function battle
    
    var newTabel=battle()
    // console.log(newTabel)
    for(let i=0; i<ship.length; i++){
        if(postShip.indexOf(ship[i]) !== -1){
            for (let j=0; j<newTabel.length; j++){
                var count=0
                for(let x=0; j<newTabel[j].length; x++){
                    if(newTabel[j][x]===" "){
                        count+=1
                        if(count<=5) // contoh manual dlu, masih bngung gmna cek ke yg postShip yang di dapat disamain sama size misal A berarti hrus cetak 5x, B 4x dst.
                        newTabel[j][x]=postShip
                    }
                }
                // console.log(newTabel)
            }
            return newTabel
        }
    }   
    // return newTabel
}


// console.log(battle())
console.log(shipPosition())
// console.log(shipPosition())
// console.log(row())