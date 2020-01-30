//gunakan array berikut untuk nomer 1-3
// const arrAntrian = ['Ahmad','Hilmy','Irawan','Yoko','Arda'];

//NOMER 1
//
// function antrian(line,person){
//   arrAntrian.push(person);
//   return line;
// }
// console.log(antrian(arrAntrian,'Kamu'));

//NOMER 2
// function panggilAntrian(line){
//   arrAntrian.shift(0);
//   return line;
// }
// console.log(panggilAntrian(arrAntrian));

//NOMER 3
// function tumpukkan(line,title){
//   arrAntrian.unshift(title);
//   return line;
// }
// console.log(tumpukkan(arrAntrian,'Media'));

//NOMER 4


function ganjilGenap(plat) {
  let genap = 0;
  let ganjil = 0;
  for (i = 0; i < plat.length; i++) {
    if (plat.length < 15) {
      if (plat[i] === ';') {
        if ((plat[i-1]%2) === 0) {
          genap++;
        } else {
          ganjil++;
        }
      }
      if (plat[i] === plat[plat.length-1]) {
        if (plat[i]%2 === 1) {
          ganjil++;
        } else {
          genap++;
        }
      }
    } else {
      if (plat[i] === ';') {
        if ((plat[i-1]%2) === 0) {
          genap++;
        } else {
          ganjil++;
        }
      }
      if (plat[i] === plat[plat.length-1]) {
        if (plat[i]%2 === 0) {
          genap++;
        } else {
          ganjil++;
        }
      }
    }

  }

  if (plat === '') {
    return 'plat tidak ditemukan';
  } else if (!plat) {
    return 'invalid data';
  } else {
      return `plat genap sebanyak ${genap} dan plat ganjil sebanyak ${ganjil}`
  }
  }
console.log(ganjilGenap('2341;3429;864;1309;1276')) //plat genap sebanyak 2 dan plat ganjil sebanyak 3
console.log(ganjilGenap('2347;3429;1305')) //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
console.log(ganjilGenap('864;1308;1276;1432')) //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
// console.log(ganjilGenap('')) //plat tidak ditemukan
// console.log(ganjilGenap()) //invalid data
