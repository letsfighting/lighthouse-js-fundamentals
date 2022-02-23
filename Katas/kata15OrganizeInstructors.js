const organizeInstructors = function (instructors) {

  let output = {

  };


  for (let i = 0; i < instructors.length; i++) {
    if (output[instructors[i]['course']]) {
      output[instructors[i]['course']].push(instructors[i]['name'])
    } else {
      output[instructors[i]['course']] = [instructors[i]['name']]
    }
  }

  return output;

};

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));