let name = 'Ahkhyas';
let age = 28;
let citizenship = 'indonesia';
let taxID = '';

if (name === '' || name === 0 || name === NaN || name === undefined || name === null) {
  console.log("NAMA ANDA KOSONG! TIDAK BISA DAFTAR!");
} else if (age < 17) {
  console.log("BELUM CUKUP UMUR!");
} else {
  if (citizenship === 'wkwkland') {
    taxID += (name.length + age);
    console.log('WKWK-'+taxID);
  } else {
    taxID += (name.length + age);
    console.log('ABCD-'+taxID);
  }
}
