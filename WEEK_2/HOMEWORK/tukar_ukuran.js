function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  let hasil = '';
  let akhir = '';

  for (let i = 0; i < kalimat.length; i++) {
    hasil = '';
    if (kalimat[i] === kalimat[i].toUpperCase()) {
      hasil = kalimat[i].toLowerCase();
    } else {
      hasil = kalimat[i].toUpperCase();
    }
    akhir += hasil;
  }
  return akhir;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
