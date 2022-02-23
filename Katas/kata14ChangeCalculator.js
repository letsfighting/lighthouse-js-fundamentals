const calculateChange = function (total, cash) {
  let change = cash - total;
  let changeObj = {
    twentyDollar: 0,
    tenDollar: 0,
    fiveDollar: 0,
    twoDollar: 0,
    oneDollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0,

  }

  for (let i = 0; i < change; i++) {
    if (change >= 2000) {
      change -= 2000;
      changeObj.twentyDollar++;
      i--;
    } else if (change >= 1000) {
      change -= 1000;
      changeObj.tenDollar++;
      i--;
    } else if (change >= 500) {
      change -= 500;
      changeObj.fiveDollar++;
      i--;
    } else if (change >= 200) {
      change -= 200;
      changeObj.twoDollar++;
      i--;
    } else if (change >= 100) {
      change -= 100;
      changeObj.oneDollar++;
      i--;
    } else if (change >= 25) {
      change -= 25;
      changeObj.quarter++;
      i--;
    } else if (change >= 10) {
      change -= 10;
      changeObj.dime++;
      i--;
    } else if (change >= 5) {
      change -= 5;
      changeObj.nickel++;
      i--;
    } else if (change >= 1) {
      change -= 1;
      changeObj.penny++;
      i--;
    }



  }


  if (changeObj.twentyDollar === 0) {
    delete changeObj.twentyDollar;
  }

  if (changeObj.tenDollar === 0) {
    delete changeObj.tenDollar;
  }

  if (changeObj.fiveDollar === 0) {
    delete changeObj.fiveDollar;
  }

  if (changeObj.twoDollar === 0) {
    delete changeObj.twoDollar;
  }

  if (changeObj.oneDollar === 0) {
    delete changeObj.oneDollar;
  }

  if (changeObj.quarter === 0) {
    delete changeObj.quarter;
  }

  if (changeObj.nickel === 0) {
    delete changeObj.nickel;
  }

  if (changeObj.dime === 0) {
    delete changeObj.dime;
  }

  if (changeObj.penny === 0) {
    delete changeObj.penny;

  }


  return changeObj;



};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));