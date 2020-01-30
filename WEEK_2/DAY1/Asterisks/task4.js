let rows4 = 3;
let h = '';

for (i = rows4; i >= 0; i--) {
    for (j = 0; j < i; j++) {
    h += '*';
    }
    h += '\n';
  }
console.log(h);
