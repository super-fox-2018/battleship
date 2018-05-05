'use strict'

function boardSea() {
    let input = 10;
    let output = [];

    for(let i = 0; i < input; i++) {
        let temp = []
        for(let j = 0; j < input; j++) {
            temp.push(' ');
        }
        output.push(temp);
    }
    return output;
}

function shipPosition(){
    let aircraftCarrier = 5;
    let battleship = 4;
    let cruiser = 3;
    let destroyer = 2;
}

console.log(boardSea());