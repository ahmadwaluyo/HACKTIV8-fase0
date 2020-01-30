// var angka = 641573;  //73
// var angka = 12783456; //83
// var angka = 910233; //91
var angka = 79918293; //99

angka = angka.toString();
var x = Number(angka[0]+angka[1]);

for (var i = 0; i <= angka.length-1; i++) {
    var y = Number(angka[i+1]+angka[i+2]);
    if (x < y) {
        x = y;
    } else {
      null
    }
}

console.log(x);
