function changeMe(arr) {
  // you can only write your code here!
  let heroes = {};

  if (arr.length === 0) {
    console.log("");
  } else {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length + 1; j++) {
        if (j === 0) {
          console.log(`${i+1}. ${arr[i][j]} ${arr[i][j+1]}`);
          heroes.firstName = arr[i][j];
        } else if (j === 1) {
          heroes.lastName = arr[i][j];
        } else if (j === 2) {
          heroes.gender = arr[i][j];
        } else if (j === 3) {
          if (arr[i][j] === undefined) {
            heroes.age = 'Invalid Birth Year'
          } else {
            heroes.age = 2019 - arr[i][j];
          }
        }
      }
      console.log(heroes);
    }
  }
}

// TEST CASES
changeMe([
  ['Christ', 'Evans', 'Male', 1982],
  ['Robert', 'Downey', 'Male']
]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
