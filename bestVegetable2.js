const judgeVegetable = function (veg, met) {
  let highest = [0];

  for (let i = 1; i < veg.length; i++) {
    if (veg[highest[0]][met] < veg[i][met]) {

      highest.splice(1);
      highest[0] = i;

    } else if (veg[highest[0]][met] === veg[i][met]) {
      highest.push(i);
    }
  }

  if (highest.length > 1) {
    let tiedWinners = '';

    for (let j = 0; j < highest.length; j++) {
      tiedWinners += veg[highest[j]].submitter + ' & ';
    }

    return tiedWinners.slice(0, -3);

  } else {
    return veg[highest[0]].submitter;
  }


}



const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 1,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'plumpness'

console.log(judgeVegetable(vegetables, metric));