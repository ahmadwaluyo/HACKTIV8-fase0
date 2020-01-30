let detik = 90;
let menit = Math.floor(detik/60);
let lebih = detik%60;
if (lebih < 10) {
  lebih = '0'+lebih;
}
// console.log(menit+':'+lebih);
if (detik == 60) {
  console.log('test');
  console.log('Waktu '+menit+':'+lebih);
}else if (detik > 60) {
  console.log('Waktu '+menit+':'+lebih);
} else if (detik < 60) {
  console.log('Waktu '+detik);
}
