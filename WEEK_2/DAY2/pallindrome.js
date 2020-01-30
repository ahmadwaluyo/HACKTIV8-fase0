// let kata = 'katak';
// let kata = 'kasur rusak';
let kata = 'makan';

let awal = '';
let akhir = '';

for (let i = 0; i < kata.length; i++) {
  akhir = '';
  awal += kata[i];
  for (let j = kata.length-1; j >= 0; j--) {
  akhir += kata[j];
  }
}
if (awal === akhir) {
  console.log('True');
} else if (awal !== akhir) {
  console.log('false');
}
