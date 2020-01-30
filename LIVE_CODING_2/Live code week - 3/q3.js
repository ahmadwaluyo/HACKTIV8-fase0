/*
================
ONE PIECE BATTLE
================
onePieceBattle adalah sebuah function yang menerima parameter berupa object dengan ketentuan sebagai berikut :
1. name : 'nama dari player sesuai test case yang ada (asumsi nama selalu diisi)'
2. enemy : 'array enemy yang akan dilawan (asumsi selalu diisi)'
3. health : 'jumlah nyawa player selalu dimulai dari 100'

input  ==>
console.log(onePieceBattle(
    {
        name: 'Monkey D Luffy',
        enemy: ['kaido','Edward Newgate Shirohige*'],
        health: 100
    }
))

output ==>

{
    name : 'Monkey D Luffy',
    deadEnemy: ['kaido','Edward Newgate Shirohige*'],
    currentHealth : 20,
    win: true
}

PENJELASAN :
- setiap 'enemy' memiliki power yang berbeda. power diperoleh dari jumlah panjang kata di setiap element pada array 'enemy'. enemy dengan simbol * (bintang) akan memperoleh ekstra power 50
- 'enemy' akan kalah ketika health player masih lebih besar atau sama dengan power 'enemy'
- saat 'enemy' berhasil dikalahkan, nama 'enemy' tersebut akan di tambahkan kedalam array 'deadEnemy' dan 'health' player akan berkurang dan di tampilkan dalam 'currentHealth'
- jika player berhasil mengalahkan semua enemy, 'win' di-isi true
- player yang kalah memiliki status 'win' false. dan 'currentHealth' tidak bisa minus
- player kalah ketika tidak bisa mengalahkan semua enemy


contoh :
'kaido' memiliki power = 5
'Edward Newgate Shirohige*' memiliki power = 25 + 50 = 75
(panjang nama termasuk spasi dan simbol)


RULES :
- Dilarang menggunakan indexOf, includes, split, splice
*/
function onePieceBattle(data) {
  // your code here
  let obj = data;
  let enemy = [];
  let power = 0;
  let number = 0;
  let temp = 0;
  
  for (let i = 0; i < data.enemy.length; i++) {
    enemy.push(data.enemy[i]);
    power += data.enemy[i].length;
    for (let j = 0; j < data.enemy[i].length; j++) {
      if (data.enemy[i][j] === '*') {
        power += 50;
      } 
    }
}
obj.deadEnemy = data.enemy;
if (!obj.currentHealth) {
  obj.currentHealth = data.health-power;
  if (obj.currentHealth < 0) {
      temp += obj.currentHealth;
      obj.currentHealth -= temp;
  }
  // if (temp<0) {
  //   for (let x = 0; x < deadEnemy.length; x++) {
      
      
  //   }
  // }
}
if (obj.currentHealth > 0) {
  obj.win = true;
} else {
  obj.win = false;
}
delete obj.enemy;
delete obj.health;
return obj;
}

//test-cases

console.log(onePieceBattle({
  name: 'Monkey D Luffy',
  enemy: ['kaido', 'Edward Newgate Shirohige*'],
  health: 100
}))
/*
{
    name : 'Monkey D Luffy',
    deadEnemy: ['kaido','Edward Newgate Shirohige*'],
    currentHealth : 20,
    win: true
}
*/

console.log(onePieceBattle({
  name: 'Roronoa Zoro',
  enemy: ['Charlotte Linlin Big Mom*', 'Monkey D Garp', 'Charlotte Katakuri', 'Donquixote Doflamingo'],
  health: 100
}))
/*
{
    name : 'Monkey D Luffy',
    deadEnemy: ['Charlotte Linlin Big Mom*','Monkey D Garp'],
    currentHealth : 0,
    win: false
}
*/
