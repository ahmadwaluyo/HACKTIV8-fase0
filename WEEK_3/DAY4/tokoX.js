function countProfit(shoppers) {
  let listBarang = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
  ];

  let profitStacattu = 0;
  let profitZoro = 0;
  let profitUnikloh = 0;
  let stacattu = [];
  let zoro = [];
  let uniklooh = [];
  if (shoppers.length === 0) {
    return shoppers;
  }
  for (i = 0; i < shoppers.length; i++)
    if (shoppers[i].product === 'Sepatu Stacattu') {
      if (listBarang[0][2] - shoppers[i].amount >= 0) {
        stacattu.push(shoppers[i].name)
        listBarang[0][2] = listBarang[0][2] - shoppers[i].amount
        profitStacattu = profitStacattu + (shoppers[i].amount * 1500000)
      }
    }
  else if (shoppers[i].product === 'Baju Zoro') {
    if (listBarang[1][2] - shoppers[i].amount >= 0) {
      zoro.push(shoppers[i].name)
      listBarang[1][2] = listBarang[1][2] - shoppers[i].amount
      profitZoro = profitZoro + (shoppers[i].amount * 500000)
    }
  } else if (shoppers[i].product === 'Sweater Uniklooh') {
    if (listBarang[2][2] - shoppers[i].amount >= 0) {
      uniklooh.push(shoppers[i].name)
      listBarang[2][2] = listBarang[2][2] - shoppers[i].amount
      profitUnikloh = profitUnikloh + (shoppers[i].amount * 175000)
    }
  }
  let hasil = [{
      product: 'Sepatu Stacattu',
      shoppers: stacattu,
      leftOver: listBarang[0][2],
      totalProfit: profitStacattu,
    },
    {
      product: 'Baju Zoro',
      shoppers: zoro,
      leftOver: listBarang[1][2],
      totalProfit: profitZoro,
    },
    {
      product: 'Sweater Uniklooh',
      shoppers: uniklooh,
      leftOver: listBarang[2][2],
      totalProfit: profitUnikloh,
    }
  ]
  return hasil
  // you can only write your code here!
}
// TEST CASES
console.log(countProfit([{
  name: 'Windi',
  product: 'Sepatu Stacattu',
  amount: 2
}, {
  name: 'Vanessa',
  product: 'Sepatu Stacattu',
  amount: 3
}, {
  name: 'Rani',
  product: 'Sweater Uniklooh',
  amount: 2
}]));
// [ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{
  name: 'Windi',
  product: 'Sepatu Stacattu',
  amount: 8
}, {
  name: 'Vanessa',
  product: 'Sepatu Stacattu',
  amount: 10
}, {
  name: 'Rani',
  product: 'Sweater Uniklooh',
  amount: 1
}, {
  name: 'Devi',
  product: 'Baju Zoro',
  amount: 1
}, {
  name: 'Lisa',
  product: 'Baju Zoro',
  amount: 1
}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{
  name: 'Windi',
  product: 'Sepatu Naiki',
  amount: 5
}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
