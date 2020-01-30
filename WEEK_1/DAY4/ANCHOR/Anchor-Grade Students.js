var nilai = 90;
var mahasiswa = 'Ahmad';

if (nilai >= 80 && nilai <= 100) {
	console.log('Nilai Akhir'+' '+mahasiswa+' '+'adalah'+' '+'A');
} else if(nilai >= 65 && nilai <=79) {
	console.log('Nilai Akhir'+' '+mahasiswa+' '+'adalah'+' '+'B');
} else if ( nilai >= 50 && nilai <= 64){
	console.log('Nilai Akhir'+' '+mahasiswa+' '+'adalah'+' '+'C');
} else if (nilai >= 35 && nilai <= 49 ) {
	console.log('Nilai Akhir'+' '+mahasiswa+' '+'adalah'+' '+'D');
} else if (nilai >= 0 && nilai <= 34) {
	console.log('Nilai Akhir'+' '+mahasiswa+' '+'adalah'+' '+'E');
} else {
	console.log('Nilai Invalid!');
}

/*
SET VAR student's grade as 90 in integer
SET VAR Mahasiswa as AHMAD in string

DETERMINE VALUE RESULT
IF CONDITIONAL student's grade is equal or greater than 80 AND student's grade is equal or less than 100
DISPLAY "student's grade is A";
ELSE IF CONDITIONAL student's grade is equal or greater than 65 AND student's grade is equal or less than 79
DISPLAY "student's grade is B";
ELSE IF CONDITIONAL student's grade is equal or greater than 50 AND student's grade is equal or less than 64
DISPLAY "student's grade is C";
ELSE IF CONDITIONAL student's grade is equal or greater than 35 AND student's grade is equal or less than 49
DISPLAY "student's grade is D";
ELSE IF CONDITIONAL student's grade is equal or greater than 0 AND student's grade is equal or less than 34
DISPLAY "student's grade is E";
and if NO ELSE conditional case like requirements DISPLAY "invalid value"

DISPLAY value result;


SHOW student's grade
*/
