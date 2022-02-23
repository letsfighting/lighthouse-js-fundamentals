var bills = [50.23, 19.12, 34.01,
  100.11, 12.15, 9.90, 29.11, 12.99,
  10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

let totals = bills.map(function (bill) {
  bill *= 1.15;
  bill = bill.toFixed(2);
  bill = Number(bill);

  return bill;
});

console.log(totals);

