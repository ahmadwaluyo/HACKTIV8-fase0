var kata = 'xoxoxoxxo';
var x = '';
var o = '';

for (var i = 0; i < kata.length; i++) {
  if (kata[i] === 'x') {
    x += 'x';
  }
  if (kata[i] === 'o') {
    o += 'o';
  }
}
if (o.length === x.length) {
  console.log('True');
} else {
  console.log('False');
}
