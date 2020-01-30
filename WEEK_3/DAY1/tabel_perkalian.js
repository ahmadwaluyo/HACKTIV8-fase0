function tabelPerkalian(angka) {
  // you can only write your code here!
  let pembagi = [];
  let hasilA = [];
  let hasilB = [];
  let akhir = [];
  for (let i = 1; i <= angka; i++) {
    if (angka % i === 0) {
      pembagi.push(i);
    }
  }
  if (pembagi.length === 1) {
    akhir.push(`${pembagi}x${pembagi}`);
  } else {
    for (let i = 0; i < pembagi.length / 2; i++) {
      hasilA.push(pembagi[i]);
    }
    for (let i = pembagi.length - 1; i >= pembagi.length / 2; i--) {
      hasilB.push(pembagi[i]);
    }
    for (let i = 0; i < hasilA.length; i++) {
      akhir.push(`${hasilA[i]}x${hasilB[i]}`)
    }
  }

  return akhir;
}


// TEST CASES
console.log(tabelPerkalian(24)); // [ '1x24', '2x12', '3x8', '4x6' ]
console.log(tabelPerkalian(90)); // [ '1x90', '2x45', '3x30', '5x18', '6x15', '9x10' ]
console.log(tabelPerkalian(20)); // [ '1x20', '2x10', '4x5']
console.log(tabelPerkalian(179)); // [ '1x179' ]
console.log(tabelPerkalian(1)); // [ '1x1' ]
