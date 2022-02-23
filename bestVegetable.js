const judgeVegetable = function (veg, met) {
  let highest = [0];

  if (met === 'redness') {
    for (let i = 1; i < veg.length; i++) {
      if (veg[highest[0]].redness < veg[i].redness) {

        highest.splice(1);
        highest[0] = i;

      } else if (veg[highest[0]].redness === veg[i].redness) {
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


  } else if (met === 'plumpness') {
    for (let i = 1; i < veg.length; i++) {
      if (veg[highest[0]].plumpness < veg[i].plumpness) {

        highest.splice(1);
        highest[0] = i;

      } else if (veg[highest[0]].plumpness === veg[i].plumpness) {
        highest.push(i);
      }
    }

    if (highest.length > 1) {
      return veg[highest].submitter;
    } else {
      return veg[highest[0]].submitter;
    }



    /* } else {
       return 'Invalid Criteria';
     }*/

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