
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];






function chooseStations(station) {

  let goodStations = [];

  for (let i = 0; i < station.length; i++) {

    if (popCheck(station[i][1]) && typeCheck(station[i][2])) {
      goodStations.push(station[i][0]);
    }
  }

  return goodStations;

}

function popCheck(population) {
  if (population >= 20) {
    return true;
  } else {
    return false;
  }
}

function typeCheck(place) {
  if ((place === 'school') || (place === 'community centre')) {
    return true;
  } else {
    return false;
  }
}

console.log(chooseStations(stations));

