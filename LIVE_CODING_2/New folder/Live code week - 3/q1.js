/*
 * Buatlah sebuah fungsi yang akan menerima array of numbers dan 
 * return "Boom!" jika terdapat dua buah angka 7 di dalam array.  
 * Jika tidak ada, return "No Joy".
 * 
 * Dilarang menggunakan built-in function kecuali:
 * built-in function untuk merubah angka ke string.
 * 
 * contoh:
 * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17] => "Boom!"
 * [8, 6, 33, 100] => "No Joy!"
 * [2, 55, 60, 97, 86, 56, 47] => "Boom!"
 * 
*/

function sevenBoom(arr) {
	//TULIS KODE KAMU DI BAWAH INI
}

//checker
console.log( sevenBoom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]) );  //Boom!
console.log( sevenBoom([8, 6, 33, 100]) );  //No Joy!
console.log( sevenBoom([2, 55, 60, 97, 86, 56, 47, 57]) );  //No Joy!
console.log( sevenBoom([2, 6, 7, 9, 3, 8, 4, 17, 21, 25, 24]) );  //Boom!
console.log( sevenBoom([33, 68, 400, 5]) );  //No Joy!
console.log( sevenBoom([86, 48, 100, 66]) );  //No Joy!
console.log( sevenBoom([76, 55, 44, 32, 56, 54, 32, 88, 67]) );  //Boom!
console.log( sevenBoom([35, 4, 9, 37, 22, 24, 47, 43]) );  //Boom!