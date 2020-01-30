// let kata = 'hacktiv8';
// let r_kata = '';
// let arrKata = [];
// let r_arrKata = [];
// let final = [];
// for (let i = kata.length-1; i >= 0 ; i--) {
//   r_kata += kata[i];
// }
// r_arrKata.push(r_kata);
//
// // console.log(r_arrKata);
//
//
//
// for (var j = 0; j < kata.length; j++) {
//   h = [];
//   for (var i = kata.length-1; i >= j; i--) {
//     h.push(r_arrKata[0][i])
//   }
//   final.push(h);
// }
// console.table(final);
//
//
//
//   // for (let i = kata.length; i > 0; i--) {
//   //   h = '';
//   //   for (let j = 0; j < i; j++) {
//   //     h += kata[j];
//   //   }
//   //   console.log(h);
//   // }
// let board = [
//   ['*', '*', '*', 10],
//   ['*', '*', -5, -10, '*', 100],
//   ['a', 'A', 'o', 'b']
// ]
// let vokal = 'aiueo';
//
// console.log(temp);

// let test = 'Hello World';
// let h = '';
// h += test.slice(0,1);
//
// console.log(h);
function sittingArrangement(person, column){
  let kursi = [];
  let antrian = [];
  if (column < 1) {
    return 'invalid number';
  } else {
    for (var j = 0; j < person.length; j++) {
      if (person.length%column !== 0) {
        person.push('kursi kosong');
      }
    }
    for (let i = 0; i < person.length; i++) {
      kursi.push(person[i]);
      if (kursi.length === column) {
        antrian.push(kursi);
        kursi = [];
      }
      }
    }
    return antrian


}
console.log(sittingArrangement(['A', 'B', 'C'], 0 )); //Invalid number
console.log(sittingArrangement([ 'Juli', 'Nisa', 'Desi', 'Ulfa', 'Puji' ], 2)); //[ [ 'Juli', 'Nisa' ], [ 'Desi', 'Ulfa' ], [ 'Puji', 'Kursi Kosong' ] ]
console.log(sittingArrangement([ 'Yosia', 'Asrawi', 'Andru' ], 3)); //[ [ 'Yosia', 'Asrawi', 'Andru' ] ]
console.log(sittingArrangement([ 'Lukman', 'Adam', 'Dimas', 'Hansin', 'Orion' ], 4));
// [
//   [ 'Lukman', 'Adam', 'Dimas', 'Hansin' ],
//   [ 'Orion', 'Kursi Kosong', 'Kursi Kosong', 'Kursi Kosong' ]
// ]
