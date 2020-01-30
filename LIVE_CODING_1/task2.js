let name = 'revan'; // silakan berikan nilai bebas
let citizenship = 'Amsterdam'; //silahkan berikan nilai bebas
let grade = 80; //silahkan berikan nilai angka bebas;

if (name === '' || name === 0) {
  console.log('NAMA ANDA KOSONG!TOLONG DICEK KEMBALI');
} else if (citizenship === ''|| citizenship === 0) {
  console.log('TOLONG ISI KEWARGANEGARAAN ANDA SESUAI KARTU IDENTITAS!');
} else if (grade === '' || grade === 0) {
  console.log('Nilai SNMPTN Kosong! ANDA TIDAK DAPAT MENGIKUTI PROSES SELEKSI');
} else {
  if (grade >= 80 && (citizenship === 'Indonesia' || citizenship === 'indonesia')) {
    console.log(`${name} LULUS SELEKSI PROGRAM NASIONAL`);
  } else if (grade >= 80 && (citizenship !== 'Indonesia' || citizenship !== 'indonesia')) {
    console.log(`${name} LULUS SELEKSI PROGRAM INTERNASIONAL`);
  } else if (grade < 80) {
    console.log('TIDAK LULUS SELEKSI');
  }
}
