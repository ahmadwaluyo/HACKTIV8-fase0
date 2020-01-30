function mengelompokkanAngka(arr) {
  // you can only write your code here!
  let arr_genap = [];
  let arr_ganjil = [];
  let arr_kel = [];
  let hasil = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      arr_kel.push(arr[i]);
    } else if (arr[i] % 2 === 0) {
      arr_genap.push(arr[i]);
    } else {
      arr_ganjil.push(arr[i]);
    }
  }
  hasil.push(arr_genap);
  hasil.push(arr_ganjil);
  hasil.push(arr_kel);
  return hasil;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
