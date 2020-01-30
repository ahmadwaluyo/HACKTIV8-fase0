var nama = 'Ahmad';
var nilai = 90;
var absen = 5;

if (nilai >= 70 && nilai <= 100 && absen >= 5) {
  console.log(nama+' '+'Dinyatakan LULUS!');
} else if (nilai < 0 || nilai > 100) {
  console.log('Nilai invalid!');
}else {
  console.log(nama+' '+'MOHON MAAF ANDA BELUM LULUS');
}


/*
SET VAR name as Ahmad in string
SET VAR mark as 70 in integer
SET VAR abcence as 8 in integer

DETERMINE VALUE result
IF CONDITIONAL (mark) value is equal or greater than 70 AND CONDITIONAL abcence value is greater than 5
DISPLAY  value (name) plus "officially graduated";
ELSE IF CONDITIONAL (mark) value less than 0 OR CONDITIONAL (mark) value is greater than 100
DISPLAY invalid value
ELSE DISPLAY DISPLAY value (name) plus we apologize you didn't passed yet

SHOW value result
*/
