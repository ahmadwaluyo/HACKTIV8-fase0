// // var angka = 641573;  //73
// var angka = 12783456; //83
// // var angka = 910233; //91
// // var angka = 79918293; //99
//
// angka = angka.toString();
// var x = Number(angka[0]+angka[1]);
//
// for (var i = 0; i < angka.length-1; i++) {
//   var y = Number(angka[i+1]+angka[i+2]);
//   if (x < y) {
//     x = y;
//   } else {
//     null;
//   }
// }
//
// console.log(x);

// var kata = 'i love javascript';
// var hasil = '';
//
// for (var i = 0; i < kata.length; i++) {
//   var h = kata[i];
//   if (h === 'a' || h === 'i' || h === 'u' || h === 'e' || h === 'o') {
//     h = '$';
//   }
//   hasil += h;
// }
// console.log(hasil);

var stamina = 5;
var track = "xooxoox";
// console.log(jarak);
// x itu lurusan pakai 1 stamina
// 0 itu tanjakan pakai2 stamina
if (stamina === '' || stamina === 0) {
  console.log("Maaf kamu belum terdaftar sebagai peserta.");
} else {
    for (var i = 0; i < track.length; i++) {
      if (track[i] === 'x') {
        stamina = stamina-1;
      } else if (track[i]=== 'o') {
        stamina = stamina-2;
      }
      var jarak = track.indexOf(i);
    }
    if (stamina <= 0) {
      console.log("Mohon Maaf kamu belum mampu sampai ke garis finish, jarak tempuh kamu adalah "+jarak+" km");
      console.log("status stamina = "+stamina);
    } else {
      console.log("selamat kamu berhasil sampai garis finish");
      console.log("stamina tersisa = "+stamina);
    }
}
