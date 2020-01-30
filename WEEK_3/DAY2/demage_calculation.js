function attack(damage) {
  // Code disini
  //rumus damage - 2 disetiap attack
  let total_damages = damage - 2;
  return total_damages;
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
  // Code disini
  let akhir = attack(damagePerAttack) * numberOfAttacks;
  return akhir;
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90
