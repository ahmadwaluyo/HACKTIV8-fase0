function getUglyNumber(number) {
  let hasil = [];
  for (let i = 2; i <= number; i++) {
    let num = i;
    while (num%2 === 0) {
      num = num/2;
    }
    while (num%3 === 0) {
      num = num/3;
    }
    while (num%5 === 0) {
      num = num/5
    }

    if (num === 1) {
      hasil.push(i)
    }
  }
  return hasil;
}
console.log(getUglyNumber(10)); //[ 2, 3, 4, 5, 6, 8, 9, 10 ]
console.log(getUglyNumber(20)); //[ 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20 ]
console.log(getUglyNumber(4)); //[ 2, 3, 4]
console.log(getUglyNumber(1)); //[]
