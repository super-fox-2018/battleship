const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateSea(coordinates) {
  const sea = [];
  let idx = 0;
  for (let i = 0; i < 11; i += 1) {
    sea.push([]);
    for (let j = 0; j < 11; j += 1) {
      if (i === 0 && j > 0) {
        sea[i].push(`${j}`);
      } else if (j === 0 && i > 0) {
        sea[i].push(coordinates[idx]);
        idx += 1;
      } else sea[i].push(' ');
    }
  }

  return sea;
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  while(true) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function generateCoordinate(sea, currentShip) {
  let x = 0;
  let y = 0;
  let direction = undefined;
  let endCoordinate = undefined;
  let foundPosition = false;
  const initial = 'ABCD';
  while (!foundPosition) {
    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * 10);
    const option = Math.floor(Math.random() * 4);
    switch(option) {
      case 0:
        let rightSafe = true;
        for (let i = x; i < x+1; i += 1) {
          for (let j = y; j < (y + currentShip.size); j += 1) {
            if (sea[i][j] !== ' ') {
              rightSafe = false;
              break;
            }
          }
        }
        if (rightSafe) {
          direction = 'right';
          endCoordinate = (y + currentShip.size);
        }
        break;
      case 1:
        let leftSafe = true;
        for (let i = x; i < x+1; i += 1) {
          for (let j = y; j > (y - currentShip.size); j -= 1) {
            if (sea[i][j] !== ' ') {
              leftSafe = false;
              break;
            }
          }
        }
        if (leftSafe) {
          direction = 'left';
          endCoordinate = (y - currentShip.size);
        }
        break;
      case 2:
        let downSafe = true;
        for (let i = x; i < (x + currentShip.size); i += 1) {
          if(sea[i] === undefined) {
            downSafe = false;
            break;
          }
          for (let j = y; j < y+1; j += 1) {
            if (sea[i][j] !== ' ') {
              downSafe = false;
              break;
            }
          }
        }

        if (downSafe) {
          direction = 'down';
          endCoordinate = (x + currentShip.size);
        }
        break;
      case 3:
        let upSafe = true;
        for (let i = x; i > (x - currentShip.size); i -= 1) {
          if(sea[i] === undefined) {
            upSafe = false;
            break;
          }
          for (let j = y; j < y+1; j += 1) {
            if (sea[i][j] !== ' ') {
              upSafe = false;
              break;
            }
          }
        }
        if (upSafe) {
          direction = 'up';
          endCoordinate = (x - currentShip.size);
        }
        break;
      default:
    }
    
    if (direction !== undefined) foundPosition = true;
  }

  return [x, y, direction, endCoordinate];
}

function addBattleship(sea, ships) {
  for (let i = 0; i < ships.length; i += 1) {
    const currentShip = ships[i];
    const shipInitial = ships[i].name[0];
    const [x, y, direction, endCoordinate] = generateCoordinate(sea, currentShip);

    if (direction === 'right') {
      for (let i = x; i < x+1; i += 1) {
        for (let j = y; j < endCoordinate; j += 1) {
          sea[i][j] = shipInitial;
        }
      }
    } else if (direction === 'left') {
      for (let i = x; i < x+1; i += 1) {
        for (let j = y; j > endCoordinate; j -= 1) {
          sea[i][j] = shipInitial;
        }
      }
    } else if (direction === 'down') {
      for (let i = x; i < endCoordinate; i += 1) {
        for (let j = y; j < y+1; j += 1) {
          if ('ABCD'.includes(sea[i][j])) console.log("down" ,currentShip);
          sea[i][j] = shipInitial;
        }
      }
    } else if (direction === 'up') {
      for (let i = x; i > endCoordinate; i -= 1) {
        for (let j = y; j < y+1; j += 1) {
          if ('ABCD'.includes(sea[i][j])) console.log("up", currentShip);
          sea[i][j] = shipInitial;
        }
      }
    }
  }
}

function checkAttack(ships, coordinates, coordinate) {
  const initial = 'ABCD';
  const x = coordinates.indexOf(coordinate[0]) + 1;
  const y = +coordinate.slice(1);
  if (x === 0 || isNaN(y)) return 'Wrong Input !!!';
  if (x > 10 || y > 10) return 'Out of bonds!';
  bombs -= 1;
  if (sea[x][y] !== ' ' && sea[x][y] !== 'X') {
    let ship = ships[initial.indexOf(sea[x][y])];
    ship.health -= 1;
    sea[x][y] = 'X';
    if (ship.health === 0) return `${ship.name} has been destroyed`;
    else return `You hit ${ship.name}`;
  } else {
    sea[x][y] = '/';
    return 'You missed!';
  }
}

function isFinished(ships, bombs) {
  if (bombs === 0) return 'You lose, you are running out bombs';
  let isWin = true;
  for (let i = 0; i < ships.length; i += 1) {
    if (ships[i].health > 0) {
      isWin = false;
      break;
    }
  }

  return isWin ? `You win` : false;
}

function reset_board() {
  process.stdout.write('\x1Bc'); 
}

const bombAmount = +process.argv[2];

const coordinates = 'ABCDEFGHIJ';
const sea = generateSea(coordinates);
const ships = [{
  name: 'Aircraft carrier',
  size: 5,
  health: 5
},{
  name: 'Battleship',
  size: 4,
  health: 4
},{
  name: 'Cruiser',
  size: 3,
  health: 3
},{
  name: 'Destroyer',
  size: 2,
  health: 2
}];

let bombs = bombAmount || 20;

function startGame(ships, coordinates, bombs) {
  console.log(`You have ${bombs} bomb${bombs>1 ? 's' : ''} left`);
  const finished = isFinished(ships, bombs);
  if (finished) {
    console.log(finished);
    console.log('Press Ctrl + C to exit');
    return true;
  }
  console.log(sea);
  question(ships, coordinates);
}

function question(ships, coordinates) {
  rl.question('Masukkan column: ', (coordinate) => {
    reset_board();
    console.log(checkAttack(ships, coordinates, coordinate));
    startGame(ships, coordinates, bombs);
  });
}

reset_board();
addBattleship(sea, ships);
if (startGame(ships, coordinates, bombs)) {
  rl.close();
  return;
}
