function splitting(str) {
  let nama_hero = '';
  let hero_group = [];
  let temp = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ',') {
      hero_group.push(temp);
      temp = '';
    } else if (i === str.length - 1) {
      temp += str[i];
      hero_group.push(temp);
    } else {
      temp += str[i];
    }
  }
  return hero_group;
  // memisahkan data per array

}

function pemisah(str) {

}
console.log(splitting('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
