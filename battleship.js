/* Program : Battleship
   Author : Ridozaen
*/
function battleship(rows, cols) {
    let battleArea = generateBoard();
    let x1 = rows;
    let y1 = cols;
    console.log(x1, y1);
    // console.log(x2,y2);
    console.log(battleArea);
    // console.log(battleArea[x1][y1]);
    let objShip = generateShip();
    for (let i = 0; i < objShip.length; i++) {
        if (objShip[i].name.indexOf(battleArea[x1][y1]) !== -1) {
            battleArea[x1][y1] = 'X';
            console.log("Enemy " + objShip[i].name + " Down!");
            console.log(battleArea);
            break;
        }
    }
}


function generateBoard() {
    let arrCol = [];
    // const size = ['5', '4', '3', '2'];
    const ship = ['A', 'B', 'C', 'D'];
    let objShip = generateShip();
    for (let i = 0; i < 10; i++) {
        arrRow = [];
        for (let j = 0; j < 10; j++) {
            arrRow.push(' ');
        }
        arrCol.push(arrRow);
    }

    for (let j = 0; j < objShip.length; j++) {
        let isAvail = false
        while (isAvail === false) {
            let positionX = Math.round(Math.random() * 9);
            let positionY = Math.round(Math.random() * 9);
            let direction = Math.round(Math.random() * 3);
            objShip[j].position[0] = positionX;
            objShip[j].position[1] = positionY;
            objShip[j].direction = direction;
            if (checkAvailSpace(arrCol, objShip[j])) {
                isAvail = true;
                fillBattleShip(arrCol, objShip[j]);
            }
        }
    }
    return arrCol;
}

function checkAvailSpace(arrCol, obj) {
    let posX = obj.position[0];
    let posY = obj.position[1];
    let isAvail = true;
    // console.log(obj);
    //kanan
    if (obj.direction === 0) {
        for (let i = 0; i < obj.size; i++) {
            if (arrCol[posX][posY + i] !== ' ' || arrCol[posX][posY + i] === undefined) {
                isAvail = false;
                break;
            }
        }
    }
    //kiri
    if (obj.direction === 1) {
        for (let j = obj.size - 1; j >= 0; j--) {
            if (arrCol[posX][posY - j] !== ' ' || arrCol[posX][posY - j] === undefined) {
                isAvail = false;
                break;
            }
        }
    }
    //atas
    if (obj.direction === 2) {
        for (let k = 0; k < obj.size; k++) {
            if (!arrCol[posX + k]) {
                isAvail = false;
                break;
            }
            if (arrCol[posX + k][posY] !== ' ' || arrCol[posX + k][posY] === undefined) {
                isAvail = false;
                break;
            }
        }
    }
    //bawah
    if (obj.direction === 3) {
        for (let l = obj.size - 1; l >= 0; l--) {
            if (!arrCol[posX - l]) {
                isAvail = false;
                break;
            }
            if (arrCol[posX - l][posY] !== ' ' || arrCol[posX - l][posY] === undefined) {
                isAvail = false;
                break;
            }
        }
    }

    return isAvail;
}

function fillBattleShip(arrCol, obj) {
    let posX = obj.position[0];
    let posY = obj.position[1];
    //kanan
    if (obj.direction === 0) {
        for (let i = 0; i < obj.size; i++) {
            arrCol[posX][posY + i] = obj.name[0];
        }
    }
    //kiri
    if (obj.direction === 1) {
        for (let j = obj.size - 1; j >= 0; j--) {
            arrCol[posX][posY - j] = obj.name[0]
        }
    }
    //atas
    if (obj.direction === 2) {
        for (let k = 0; k < obj.size; k++) {
            arrCol[posX + k][posY] = obj.name[0];
        }
    }
    //bawah
    if (obj.direction === 3) {
        for (let l = obj.size - 1; l >= 0; l--) {
            arrCol[posX - l][posY] = obj.name[0];
        }
    }
}

function generateShip() {
    objShip = [{ name: "Aircraft carrier", size: 5, position: [2, 1], direction: '1' },
    { name: "Battleship", size: 4, position: [8, 1], direction: '0' },
    { name: "Cruiser", size: 3, position: [2, 7], direction: '1' },
    { name: "Destroyer", size: 2, position: [0, 0], direction: '1' }]
    return objShip;
}

// console.log (generateBoard());
// console.log (convertKoordinat('B'));

let param1 = process.argv[2];
let param2 = process.argv[3];

// battleship(param1,param2);

console.log(generateBoard());