function urutkanAbjad(str) {
  // you can only write your code here!
  let new_str = '';
  let str_arr = [];

  for (let i = 0; i < str.length; i++) {
    str_arr.push(str[i]);
  }
  str_arr.sort();
  for (let j = 0; j < str_arr.length; j++) {
    new_str += str_arr[j];
  }
  return new_str;;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
