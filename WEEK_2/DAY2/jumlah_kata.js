let kalimat = 'My Life my advanture this is because of you';
let kata = '';

for (let i = 0; i < kalimat.length; i++) {
  if (kalimat[i] === ' ') {
    kata += 1;
  }
}
// untuk kata terakhir agar menambah nilai 1
kata += 1;
console.log(kata.length);
