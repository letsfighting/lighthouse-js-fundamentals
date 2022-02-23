const instructorWithLongestName = function (instructors) {
  let longTrack = {
    name: "",
    course: ""
  };

  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i]['name'].length > longTrack['name'].length) {
      longTrack = instructors[i];
    }
  }

  return longTrack;

};

console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));


console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" },
  { name: "Fomascus", course: "Web" },
  { name: "Aomascus", course: "Web" }
]));

console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" },
  { name: "Fomascus", course: "Web" },
  { name: "Adfsgerwgrthrthus", course: "ergergerg" }
]));
