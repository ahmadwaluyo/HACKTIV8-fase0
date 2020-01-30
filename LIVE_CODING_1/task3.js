let line = 'abc#ab#ueo';
let temp1 = '';
let temp2 = '';
let virus = '';
let hasil = '';
// let line = 'abcabdueobbb';

for (var i = 0; i < line.length; i++) {
  if (line[i] === '#') {
    virus += line[i];
  }else  if (line[i] === 'a' ||line[i] === 'i' ||line[i] === 'u' ||line[i] === 'e' ||line[i] === 'o') {
    temp1 += line[i];
  } else if (line[i] !== virus || line[i] !== 'a' || line[i] !== 'i' ||line[i] !== 'u' ||line[i] !== 'e' ||line[i] !== 'o') {
    temp2 += line[i];
  }
}
if (temp1.length > temp2.length) {
  for (var i = 0; i < line.length; i++) {
    if (line[i]==='#') {
       = 'a';
    }
  }
}
console.log(line);

// for (var i = 0; i < line.length; i++) {
//   if (temp1.length > temp2.length) {
//     line[i] = 'a';
//     console.log(line);
//   } if (temp2.length > temp1.length) {
//     line[i] = 'b';
//     console.log(line);
//   }
// }
