function sorting(arrNumber) {
  // code di sini
  // kamu bisa mengggunakan function sorting yang sudah kamu buat saat weekend
  let arr2 = [];
  let pos = 0;
  let min = arrNumber[0];
  let max = arrNumber[0];

  //max number
  for (let i = 0; i < arrNumber.length; i++) {
    if (min > arrNumber[i]) {
      min = arrNumber[i];
    }
  }
  // loop
  for (let j = 0; j < arrNumber.length; j++) {
    //for ascending
    for (let k = 0; k < arrNumber.length; k++) {
      if (arrNumber[k] !== null) {
        if (max < arrNumber[k]) {
          max = arrNumber[k];
          pos = k;
        }
      }
    }
    arr2[j] = max;
    arrNumber[pos] = null;
    max = min;
  }
  return arr2;
}

function getTotal(arrNumber) {
  // code di sini
  let nilai_tertinggi = 0;
  let jumlah_nilai_tertinggi = 0;

  if (arrNumber.length !== 0) {
    nilai_tertinggi = arrNumber[0];

    for (let i = 0; i < arrNumber.length; i++) {
      if (arrNumber[i] === nilai_tertinggi) {
        jumlah_nilai_tertinggi++;
      } else {
        break;
      }
    }

  } else {
    return `''`;
  }
  return `angka paling besar adalah ${nilai_tertinggi} dan jumlah kemunculan sebanyak ${jumlah_nilai_tertinggi} kali`;
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
