// Your code here
// contoh input: node battleship.js Zena A1 A2 A3 A4 A5 A6 A7 A8 A9 A10

let enemyShips = [
  {
    nama: "Aircraft carrier",
    size: 5,
    posisi: [],
    kena: 0
  },
  {
    nama: "Battleship",
    size: 4,
    posisi: [],
    kena: 0
  },
  {
    nama: "Cruiser",
    size: 3,
    posisi: [],
    kena: 0
  },
  {
    nama: "Destroyer",
    size: 2,
    posisi: [],
    kena: 0
  },
];

function printBoard() {
  let board = [];
  let row;

  for(let i = 0; i < 10; i++) {
    row = [];
    for(let j = 0; j < 10; j++) {
      row.push("_");
    }
    board.push(row);
  }

  return board;
}

function randomEnemyShip() {
  let board = printBoard();
  let verOrHor; // 0 = vertikal, 1 = horizontal
  let randomKolom; // j
  let randomBaris; // k
  let checkOtherShip;
  let statusTaroShip;

  for(let i = 0; i < enemyShips.length; i++) {
    randomKolom = Math.floor(Math.random() * 10);
    randomBaris = Math.floor(Math.random() * 10);
    verOrHor = Math.round(Math.random());
    statusTaroShip = false;
    while(!statusTaroShip) {
      for(let j = 0; j < board.length; j++) {
        for(let k = 0; k < board[j].length; k++) {
          if((randomKolom === j) && (randomBaris === k)) {
            if(verOrHor === 0) {
              if(j+enemyShips[i].size > board.length) {
                randomKolom = Math.floor(Math.random() * 10);
                randomBaris = Math.floor(Math.random() * 10);
              } else {
                checkOtherShip = false;
                for(let l = 0; l < enemyShips[i].size; l++) {
                  if(board[j+l][k] === "O") {
                    checkOtherShip = true;
                  }
                }
                if(checkOtherShip) {
                  randomKolom = Math.floor(Math.random() * 10);
                  randomBaris = Math.floor(Math.random() * 10);
                } else {
                  for(let l = 0; l < enemyShips[i].size; l++) {
                    board[j+l][k] = "O";
                    enemyShips[i].posisi.push((j+l) + "," + k);
                  }
                  statusTaroShip = true;
                }
              }
            } else {
              if(k+enemyShips[i].size > board.length) {
                randomKolom = Math.floor(Math.random() * 10);
                randomBaris = Math.floor(Math.random() * 10);
              } else {
                checkOtherShip = false;
                for(let l = 0; l < enemyShips[i].size; l++) {
                  if(board[j][k+l] === "O") {
                    checkOtherShip = true;
                  }
                }
                if(checkOtherShip) {
                  randomKolom = Math.floor(Math.random() * 10);
                  randomBaris = Math.floor(Math.random() * 10);
                } else {
                  for(let l = 0; l < enemyShips[i].size; l++) {
                    board[j][k+l] = "O";
                    enemyShips[i].posisi.push(j + "," + (k+l));
                  }
                  statusTaroShip = true;
                }
              }
            }
          }
        }
      }
    }
  }
  return board;
}

function cekTebakan() {
  let tebakanInputan = [];
  let tebakan = [];
  for(let i = 2; i < process.argv.length; i++) {
    tebakanInputan.push(process.argv[i]);
  }
  for(let i = 0; i < tebakanInputan.length; i++) {
    tebakan.push((tebakanInputan[i].charCodeAt(0) - 65) + "," + (Number(tebakanInputan[i].slice(1)) - 1));
  }
  return tebakan;
}

function mainBattleShip() {
  let tebakan = cekTebakan();
  let board = randomEnemyShip();
  let pisahTebakan;
  let barisTebakan;
  let kolomTebakan;

  for(let i = 0; i < tebakan.length; i++) {
    for(let j = 0; j < enemyShips.length; j++) {
      for(let k = 0; k < enemyShips[j].posisi.length; k++) {
        pisahTebakan = tebakan[i].split(",");
        barisTebakan = Number(pisahTebakan[0]);
        kolomTebakan = Number(pisahTebakan[1]);
        if(tebakan[i] === enemyShips[j].posisi[k]) {
          enemyShips[j].kena++;
          board[barisTebakan][kolomTebakan] = "X";
        } else {
          if(board[barisTebakan][kolomTebakan] !== "X") {
            board[barisTebakan][kolomTebakan] = "/";
          }
        }
      }
    }
  }
  console.log(board);
  for(let i = 0; i < enemyShips.length; i++) {
    if(enemyShips[i].kena > 0) {
      console.log(`Anda telah mengenai kapal ${enemyShips[i].nama} sebanyak ${enemyShips[i].kena} kali.`);
      if(enemyShips[i].kena == enemyShips[i].size) {
        console.log(`Kapal ${enemyShips[i].nama} berhasil ditenggelamkan!`);
      }
    }
  }
}

mainBattleShip();
