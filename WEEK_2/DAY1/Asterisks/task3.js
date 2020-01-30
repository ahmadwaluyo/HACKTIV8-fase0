let rows3 = 5;
let h = '';

for (i = 0; i < rows3; i++) {
  for (j = 0; j <= i; j++) {
    h += '*';
  }
  h += '\n';
}
console.log(h);
