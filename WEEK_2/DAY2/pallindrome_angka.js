let angka = 11873297979976;
let text = '';

while (angka > 0) {
text = '';
let temp1 = '';
let temp2 = '';
text += angka;

  for (let i = 0; i < text.length; i++) {
  temp2 = '';
  temp1 += text[i];
  for (let j = text.length-1; j >= 0; j--) {
    temp2 += text[j];
  }
}
if (temp2 === temp1) {
  break;
}
angka++;
}
console.log(text);
