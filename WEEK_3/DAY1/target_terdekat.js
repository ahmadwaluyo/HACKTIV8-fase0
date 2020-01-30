function targetTerdekat(arr) {
  // you can only write your code here!
  let arr_o = 0;
  let arr_x = 0;
  let mark_x = 0;
  let mark_o = 0;
  let cek_x = 0;
  let jarak = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'x') {
      mark_x = i;
      cek_x++;
    } else if (arr[i] === 'o') {
      mark_o = i;
    }
  }
  if (cek_x === 0) {
    return 0;
  }
  if (mark_x > mark_o) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 'o') {
        arr_o += i;
      } else if (arr[i] === 'x') {
        arr_x += i;
        break;
      }
    }
    jarak = arr_x - arr_o;
    return jarak;
  } else {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === 'o') {
        arr_o += i;
      } else if (arr[i] === 'x') {
        arr_x += i;
        break;
      }
    }
    jarak = arr_o - arr_x;
    return jarak;
  }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
