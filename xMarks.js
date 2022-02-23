const finalPosition = function (move) {
  let coord = [0, 0];
  let input = "";
  for (let i = 0; i < move.length; i++) {
    input = move[i];
    if (input === 'north') {
      coord[1]++;
    } else if (input === 'south') {
      coord[1]--;
    } else if (input === 'west') {
      coord[0]--;
    } else if (input === 'east') {
      coord[0]++;
    } else {
      return 'invalid direction';
    }

  }

  return coord;

}

const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']
console.log(finalPosition(moves));