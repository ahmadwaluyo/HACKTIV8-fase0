function ladder(word) {
  let kata = 'hacktiv8';
  let r_kata = '';
  let arrKata = [];
  let r_arrKata = [];
  let final = [];
  for (let i = kata.length-1; i >= 0 ; i--) {
    r_kata += kata[i];
  }
  r_arrKata.push(r_kata);

  for (var j = 0; j < kata.length; j++) {
    h = [];
    for (var i = kata.length-1; i >= j; i--) {
      h.push(r_arrKata[0][i])
    }
    final.push(h);
  }
  return final;
}
// DRIVER CODE
console.log(ladder('hacktiv8'));
// [
//   [ 'h', 'a', 'c', 'k', 't', 'i', 'v', '8' ],
//   [ 'h', 'a', 'c', 'k', 't', 'i', 'v' ],
//   [ 'h', 'a', 'c', 'k', 't', 'i' ],
//   [ 'h', 'a', 'c', 'k', 't' ],
//   [ 'h', 'a', 'c', 'k' ],
//   [ 'h', 'a', 'c' ],
//   [ 'h', 'a' ],
//   [ 'h' ]
// ]
