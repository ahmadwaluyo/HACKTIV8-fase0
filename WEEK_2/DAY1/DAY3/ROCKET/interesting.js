let kata = 'hacktiv8';
// let kata = 'foxie';
let h = '';
let balik = '';

for (let l = kata.length-1; l >= 0 ; l--) {
  balik += kata[l];
}
// console.log(balik);

if (kata.length%2 === 0) {
  for (i = 0; i < kata.length; i++) {
    // h += '';
    for (j = kata.length; j > i; j--) {
      h += ' ';
    }
    if (i%2 === 0) {
      for (let k = 0; k <= i; k++) {
        h += balik[k];
      }
    } else if(i%2 === 1){
      for (let k = i; k >= 0; k--) {
        h += balik[k];
      }
    }

    h += '\n';
  }
} else {
  for (i = 0; i < kata.length; i++) {
    h += '';
    for (j = kata.length; j > i; j--) {
      h += ' ';
    }
    if (i%2 === 0) {
      for (let k = i; k >= 0; k--) {
        h += balik[k];
      }
    } else if(i%2 === 1){
      for (let k = 0; k <= i; k++) {
        h += balik[k];
      }
    }

    h += '\n';
  }
}

console.log(h);
