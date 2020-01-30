function countryCollection(countries) {
  // tulis kodemu dibawah ini
  //urutkan huruf awalan ascending terlebih dahulu
  let hasil = [];
  let hurufPertama = '';
  let count = 0;
  for (let i = 0; i < countries.length; i++) {
    hurufPertama += countries[i][0];
  }
  for (let i = 0; i < hurufPertama.length; i++) {
    if (hurufPertama[0] === hurufPertama[i]) {
      count++;
    }

  }
  return count;
}

  console.log(countryCollection(["Barbados", "Oman", "Gibraltar", "Malaysia", "Suriname", "Mayotte", "Turkmenistan", "Austria", "Somalia"]))
  // [
  //   [ 'B', 'Barbados', 1 ],
  //   [ 'O', 'Oman', 1 ],
  //   [ 'G', 'Gibraltar', 1 ],
  //   [ 'M', 'Malaysia', 'Mayotte', 2 ],
  //   [ 'S', 'Suriname', 'Somalia', 2 ],
  //   [ 'T', 'Turkmenistan', 1 ],
  //   [ 'A', 'Austria', 1 ]
  // ]

  // console.log(countryCollection(["Bhutan", "Comoros", "Botswana", "Iceland", "Lesotho", "Liechtenstein", "Malawi", "Algeria", "Azerbaijan", "Indonesia", "Andorra", "Armenia"]))
  // // [
  // //   [ 'B', 'Bhutan', 'Botswana', 2 ],
  // //   [ 'C', 'Comoros', 1 ],
  // //   [ 'I', 'Iceland', 'Indonesia', 2 ],
  // //   [ 'L', 'Lesotho', 'Liechtenstein', 2 ],
  // //   [ 'M', 'Malawi', 1 ],
  // //   [ 'A', 'Algeria', 'Azerbaijan', 'Andorra', 'Armenia', 4 ]
  // // ]
