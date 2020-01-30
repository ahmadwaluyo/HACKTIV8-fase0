var name = 'AHMAD';
var age = 7;
var money = 2000000;
var sisa_juice = money-50000;
var sisa_anggur = money-300000;

if (name === "" || undefined || null || 0 || NaN) {
  console.log("anda tidak boleh masuk!");
} else {
  console.log("Anda boleh masuk");
  if (age < 17) {
    console.log("Anda hanya boleh memesan Juice");
    if (money < 50000) {
      console.log("Uang tidak cukup anda harus pulang");
    } else {
      console.log("Anda bisa pesan minum. Sisa uang anda adalah " +sisa_juice);
    }
  } else {
    console.log("Anda boleh memesan anggur");
    if (money < 300000) {
      console.log("Uang anda tidak cukup anda harus pulang");
    } else {
      console.log("Anda bisa pesan minum. Sisa uang anda adalah "+sisa_anggur);
    }
  }
}


/*PSEUDO CODE
DECLARE VARIABLE
SET VAR name = 'AHMAD';
SET VAR age = 27;
SET VAR money = 2000000;
SET VAR sisa_juice = money-50000;
SET VAR sisa_anggur = money-300000;

IF CNDITIONAL
name value equal "" OR undefined value OR null value or NaN value
DISPLAY "you're forbidden to enter"
ELSE conditional
DISPLAY "you're allow to enter!"
	IF age is lower than 17
	DISPLAY "only juice you allowed to buy"
		IF money you brought lower than 50000
		DISPLAY "your money doesn't enough to buy. Go home please!"
		ELSE conditional
		DISPLAY "you allowed to order drink. Your money back is "+sisa juice variable
	ELSE conditional age lower than 17
	DISPLAY you're allowed to order wine
	IF money lower than 300000
	DISPLAY "your money doesn't enough to buy. Go home please!"
	ELSE conditional
	DISPLAY you're allowed to order drink. Your money back is sisa_anggur variable
*/
