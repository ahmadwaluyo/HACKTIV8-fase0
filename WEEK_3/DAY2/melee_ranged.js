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
}
// console.log(splitting(['Razor-Ranged','Invoker-Ranged','Meepo-Melee','Axe-Melee','Sniper-Ranged']));

function meleeRangedGrouping(str) {
  //your code here
  str = splitting(str);
  let hero_type = '';
  let arr_hero = [];
  let new_arr = [];
  let temp = '';
  let arr_ranged = [];
  let arr_melee = [];
  let akhir_penantian = [];
  if (str.length === 0) {
    let kosong = [];
    return kosong;
  } else {
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < str[i].length; j++) {
        if (str[i][j] === '-') {
          arr_hero.push(temp);
          temp = '';
        } else if (j === str[i].length - 1) {
          temp += str[i][j];
          arr_hero.push(temp);
          temp = '';
        } else {
          temp += str[i][j];
        }
      }
      new_arr.push(arr_hero);
      arr_hero = [];
    }
    for (let i = 0; i < new_arr.length; i++) {
      if (new_arr[i][1] === 'Ranged') {
        arr_ranged.push(new_arr[i][0]);
      } else if (new_arr[i][1] === 'Melee') {
        arr_melee.push(new_arr[i][0]);
      }
    }
  }

  akhir_penantian.push(arr_ranged);
  akhir_penantian.push(arr_melee);
  return akhir_penantian;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [
//   ['Razor', 'Invoker', 'Sniper'],
//   ['Meepo', 'Axe']
// ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
