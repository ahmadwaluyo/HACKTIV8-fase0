let num = 6;
let h = '';

if (num < 4 && num > 10) {
  console.log('invalid number');
} else {
  if (num%2 !== 0) {
    for (let i = 0; i < num; i++) {
      h = '';
      if (i === 0 || i === num-1 ) {
        h += '#';
        for (let j = 1; j < num; j++) {
          h += '#';
        }
      } else {
        h = '';
        for (let k = 0; k < (num-1)/2; k++) {
          h += ' ';
        }
        for (let m = 0; m < 1; m++){
          h += '|';
        }
        for (let n = 0; n < (num-1)/2; n++) {
          h += ' ';
        }
      }
      console.log(h);
    }
  } else {
      for (let i = 0; i < num; i++) {
        h = '';
        if (i === 0 || i === num-1 ) {
          h += '#';
          for (let j = 1; j < num; j++) {
            h += '#';
          }
        } else {
          h = '';
          for (let k = 0; k < (num-2)/2; k++) {
            h += ' ';
          }
          for (let m = 0; m < 1; m++){
            h += '||';
          }
          for (let n = 0; n < (num-1)/2; n++) {
            h += ' ';
          }
        }
        console.log(h);
    }
  }
}
