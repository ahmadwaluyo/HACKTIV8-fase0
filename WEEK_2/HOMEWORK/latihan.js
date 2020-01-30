// let kalimat = 'Hello World';
// let hasil = '';
// let akhir = '';
//
// for (let i = 0; i < kalimat.length; i++) {
//   hasil = '';
//   if (kalimat[i] === kalimat[i].toUpperCase()) {
//     hasil = kalimat[i].toLowerCase();
//   } else {
//     hasil = kalimat[i].toUpperCase();
//   }
//     akhir += hasil;
// }
// console.log(akhir);

// let array = [ 1, 3, 'array', -45, true, false, 'big' ];
//
// console.log(array.slice(0,3));

// console.log(sorting([ 2, 4, 6, 8, 2, 3 ])); //[ 2, 2, 3, 4, 6, 8 ]
// let array = [ 2, 4, 6, 8, 2, 3 ];
// let arr2 = [];
// let pos = 0;
// let min = array[0];
// let max = array[0];
//
// //max number
// for (let i = 0; i < array.length; i++) {
//   if (max < array[i]) {
//       max = array[i];
//   }
// }
//
// //loop
// for (let j = 0; j < array.length; j++) {
//   //for ascending
//   for (let k = 0; k < array.length; k++) {
//     if (array[k] !== null) {
//       if (min > array[k]) {
//         min = array[k];
//         pos = k;
//       }
//     }
//   }
//   arr2[j] = min;
//   array[pos] = null;
//   min = max;
// }
// console.log(arr2);
  let array = [undefined, null, 456, 'def', NaN, [] , true, 123, 'bcd', false];
  let num = [];
  let bol = [];
  let str = [];
  let hasil = [];
  let akhir_num = [];
  let akhir_str = [];
  let akhir_bol = [];

  for (let i = 0; i < array.length; i++) {

    if (array[i] === undefined || array[i] === null || typeof(array[i]) === 'object'){
      delete array[i]
    } else {
      if (typeof(array[i]) === 'number' && !isNaN(array[i])) {
          num.push(array[i]);
      } else if (typeof(array[i]) === 'boolean'){
          bol.push(array[i]);
      } else if (typeof(array[i]) === 'string' || !isNaN(array[i])){
          str.push(array[i]);
      } else if (isNaN(array[i])) {
        delete array[i];
      }
    }
  }
  hasil.push(num);
  hasil.push(str);
  hasil.push(bol);

  for (var j = 0; j < hasil.length; j++) {
    if (hasil[0][j] > hasil[0][j+1]) {
        akhir_num.push(hasil[0][j+1]);
        akhir_num.push(hasil[0][j]);
        hasil.splice(0,1,akhir_num);
    } else if (hasil[j] === hasil[1]) {
        akhir_str.push(hasil[1][1]);
        akhir_str.push(hasil[1][0]);
        hasil.splice(1,1,akhir_str);
      } else if (hasil[j] === hasil[2]) {
        akhir_bol.push(hasil[2][1]);
        akhir_bol.push(hasil[2][0]);
        hasil.splice(2,1,akhir_bol);
      }
    }

  console.log(hasil);


    //max number
