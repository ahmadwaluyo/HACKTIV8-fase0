let taiwan = 'taiwan';
let japan = 'japan';
let norway = 'norway';

let nama = "Ahmad";
let umur = 71;
let gender = 'male';
let paket = norway;
let harga = '';

if (typeof(nama) !== 'string') {
  console.log("Invalid Name, please check again");
} else if (typeof(umur) !== 'number') {
  console.log("Invalid Age, Please check again");
} else if (gender !== 'male' && gender !== 'female') {
  console.log("Invalid gender, Please check again");
} else if (paket !== taiwan && paket !== norway && paket !== japan) {
  console.log("Invalid Class, Please check again");
} else {
  if (umur < 17) {
    console.log("You are not allowed");
  } else {
    harga = '';
    if (umur > 70) {
      if (paket === taiwan) {
        harga += (2400000 - (2400000*15/100));
      } else if (paket === japan) {
        harga += (3700000 - (3700000*25/100));
      } else if (paket === norway) {
        harga += (5600000 - (5600000*40/100));
      } else {
        if (paket === taiwan) {
          harga += 2400000;
        } else if (paket === japan) {
          harga += 3700000;
        } else if (paket === norway) {
          harga += 5600000;
        }
      }
    }
  }
}
console.log(`Mr./Mrs ${nama}, ${umur}thn, ${paket},Harga yang harus dibayar adalah Rp ${harga} `);
