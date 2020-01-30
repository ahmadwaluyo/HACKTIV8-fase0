function changeVocals(str) {
  //code di sini
  let hasil = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
      hasil += 'b';
    } else if (str[i] === 'i') {
      hasil += 'j';
    } else if (str[i] === 'u') {
      hasil += 'v';
    } else if (str[i] === 'e') {
      hasil += 'f';
    } else if (str[i] === 'o') {
      hasil += 'p';
    } else {
      hasil += str[i];
    }
  }
  return hasil;
}
// console.log(changeVocals('Sergei Dragunov'));
function reverseWord(str) {
  //code di sini
  let hasil = '';
  for (let i = 1; i <= str.length; i++) {
    hasil += str[str.length - i];
  }
  return hasil;
}
// console.log(reverseWord('Sergei Dragunov'));

function setLowerUpperCase(str) {
  //code di sini
  let hasil = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      hasil += str[i].toUpperCase();
    } else if (str[i] === str[i].toUpperCase()) {
      hasil += str[i].toLowerCase();
    }
  }
  return hasil;
}
// console.log(setLowerUpperCase('Sergei Dragunov'));
//
function removeSpaces(str) {
  //code di sini
  let hasil = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      hasil += str[i];
    }
  }
  return hasil;
}
// console.log(removeSpaces('Sergei Dragunov'));

//
function passwordGenerator(name) {
  //code di sini
  let cv = changeVocals(name);
  let rw = reverseWord(cv);
  let sluc = setLowerUpperCase(rw);
  let rs = removeSpaces(sluc);
  return rs;
}
//
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
