let num = 10;
let h = '';

for (var i = 0; i < num; i++) {
  h = '';
  for (var j = num; j > i; j--) {
  h += ' ';
  }
  h += 'x';
  for (var k = 0; k < i; k++) {
  h += 'ox';
  }
  console.log(h);
}
