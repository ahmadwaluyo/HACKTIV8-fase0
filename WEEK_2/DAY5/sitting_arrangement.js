function sittingArrangement(person, column) {
  let kursi = [];
  let antrian = [];
  if (column < 1) {
    return 'invalid number';
  } else {
    for (var j = 0; j < person.length; j++) {
      if (person.length % column !== 0) {
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
console.log(sittingArrangement(['A', 'B', 'C'], 0)); //Invalid number
console.log(sittingArrangement(['Juli', 'Nisa', 'Desi', 'Ulfa', 'Puji'], 2)); //[ [ 'Juli', 'Nisa' ], [ 'Desi', 'Ulfa' ], [ 'Puji', 'Kursi Kosong' ] ]
console.log(sittingArrangement(['Yosia', 'Asrawi', 'Andru'], 3)); //[ [ 'Yosia', 'Asrawi', 'Andru' ] ]
console.log(sittingArrangement(['Lukman', 'Adam', 'Dimas', 'Hansin', 'Orion'], 4));
// [
//   [ 'Lukman', 'Adam', 'Dimas', 'Hansin' ],
//   [ 'Orion', 'Kursi Kosong', 'Kursi Kosong', 'Kursi Kosong' ]
// ]
