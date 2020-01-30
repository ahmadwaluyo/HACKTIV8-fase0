function shoppingTime(memberId, money) {
  // you can only write your code here!
  let keranjang = {};
  let duit = money;

  if (!memberId) {
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  } else if (money < 50000) {
    return "Mohon maaf, uang tidak cukup";
  } else {
    let belanja = [
      Sepatu = {
        brand: 'Sepatu Stacattu',
        harga: 1500000
      },
      Baju = {
        brand: 'Baju Zoro',
        harga: 500000
      },
      Baju2 = {
        brand: 'Baju H&N',
        harga: 250000
      },
      Sweater = {
        brand: 'Sweater Uniklooh',
        harga: 175000
      },
      Casing = {
        brand: 'Casing Handphone',
        harga: 50000
      }
    ];
    if (!keranjang[memberId]) {
      keranjang.memberId = memberId,
        keranjang.money = money,
        keranjang.listPurchased = [],
        keranjang.changeMoney = 0;
    }
    for (let i = 0; i < belanja.length; i++) {
      if (duit >= belanja[i].harga) {
        duit -= belanja[i].harga;
        keranjang.listPurchased.push(belanja[i].brand);
        keranjang.changeMoney = duit;
      }
    }
  }
  return keranjang;
}


// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
