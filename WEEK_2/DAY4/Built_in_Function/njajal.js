// console.log(ganjilGenap('2341;3429;864;1309;1276')) //plat genap sebanyak 2 dan plat ganjil sebanyak 3
// console.log(ganjilGenap('2347;3429;1305')) //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
// console.log(ganjilGenap('864;1308;1276;1432')) //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
// console.log(ganjilGenap('')) //plat tidak ditemukan
// console.log(ganjilGenap()) //invalid data

let plat = '2341;3429;864;1309;1276';

for (var i = 0; i < plat.length; i++) {
  // if (test[i] === ';') {
  //   console.log(test[i-1]);
  // } else if (test[i] === (test.length-1)) {
  //   console.log(test[i]);
  // }
  if (plat[i] === plat[plat.length-1]) {
    console.log(plat[i]);
  }
}
