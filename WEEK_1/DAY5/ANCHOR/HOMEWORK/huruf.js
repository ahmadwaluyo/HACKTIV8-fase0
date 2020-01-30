var kata = 'i love javascript';
var hasil = '';
for (var i = 0; i < kata.length; i++) {
  var h = kata[i];
  if (h === 'a' || h === 'i' || h === 'u' || h === 'e' || h === 'o') {
    h = '$';
  }
  hasil += h;
}

console.log(hasil);
