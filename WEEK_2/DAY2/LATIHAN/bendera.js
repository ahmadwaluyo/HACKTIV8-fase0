let benderaInggris = 9;
let h = '';

for (let i = 0; i < benderaInggris; i++) {
  h = '';
  h += "'";
  if (i === (benderaInggris-1)/2) {
    for (let j = 0; j < benderaInggris-1; i++) {
      h += '*';
    }
    for (var k = 0; k < 1; i++) {
      h += "'";
    }
  }
  console.log(h);
}
