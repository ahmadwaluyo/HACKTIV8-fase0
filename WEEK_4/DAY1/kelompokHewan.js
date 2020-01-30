function groupAnimals(animals) {
  let hasil = [[]];
  let a = 0;
  let temp = '';
  for (let x = 0; x < animals.length; x++) {
    // console.log(animals[x+1]);
    for (let y = x + 1; y < animals.length; y++) {
      if (animals[x][0] > animals[y][0]) {
        temp = animals[x];
        animals[x] = animals[y];
        animals[y] = temp;
      }
    }

    // animals.sort();

    // console.log(animals[x]);


  }
  // console.log(animals);

  hasil[0].push(animals[0])
  for (let i = 1; i < animals.length; i++) {
    if (animals[i][0] === hasil[a][0][0]) {
      hasil[a].push(animals[i])
    } else {
      a++;
      hasil[a] = [animals[i]]
    }
  }
  return hasil;
}
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]