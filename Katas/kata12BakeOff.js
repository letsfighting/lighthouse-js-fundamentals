const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  let bakeryAB = bakeryA.concat(bakeryB);
  let marker = 0;


  for (let i = 0; i < recipes.length; i++) {

    for (let h = 0; h < bakeryAB.length; h++) {


      if (recipes[i]['ingredients'][0] === bakeryAB[h] || recipes[i]['ingredients'][1] === bakeryAB[h]) {
        marker++;
      }




    }

    if (marker >= 2) {
      return recipes[i]['name'];
    } else {
      marker = 0;
    }


  }

}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));