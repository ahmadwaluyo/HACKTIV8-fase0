let kata = 'Stefani';
// let kata = 25;
// let kata = 0;
// let kata = '0';
// let kata = false;
let type = typeof(kata);
if (type === '' || kata === 0|| type === null || type === undefined || type === NaN) {
  console.log('invalid data');
} else if (type === 'string') {
  console.log(`Username ${kata}`);
} else if (type === 'number') {
  console.log(`Age ${kata}`);
} else if (kata === true) {
  console.log('Thank you for agreeing');
} else if (kata === false) {
  console.log('Cannot proceed without agreement');
}
