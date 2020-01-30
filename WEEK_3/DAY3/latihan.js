// Array
// let merica = []
// merica[0] = 'red'
// merica[1] = 'white'
// merica[2] = 'blue'
// console.log(merica[1])
​
// Object
// let merica = {
//   color1 : 'red',
//   color2 : 'white',
//   color3 : 'blue'
// }
// console.log(merica['color2'])
​
//-------------------------------------------------------------
​
// Array
// let movie = [
//   ['One piece','Naruto','Boruto'], // Anime
//   ['HangOver','21 Jump Street'], // Comedy
//   ['Annabele','IT'], // Horror
//   ['Anakku anak suamiku tapi bukan anakku'] // Drama
// ]
// // Akses array film Comedy
// console.log(movie[1])
​
// // Object
// let movie = {
//   anime : ['One piece','Naruto','Boruto'],
//   comedy: ['HangOver','21 Jump Street'],
//   horror: ['Annabele','IT'],
//   drama: ['Anakku anak suamiku tapi bukan anakku']
// }
// console.log(movie['comedy'])
​
//-------------------------------------------------------------
​
// JSON data structure
​
//-------------------------------------------------------------
​
​
// const zoo = {
//   lion: '🦁',
//   panda: '🐼'
// };
​
// console.log(Object.keys(zoo))
// get object keys
// ['lion', 'panda']
​
// console.log(Object.values(zoo))
// get object values
// ['🦁', '🐼']
​
// console.log(Object.entries(zoo));
​
// convert object to array
// [ ['lion', '🦁'], ['panda', '🐼'] ]
​
//-------------------------------------------------------------
​
​
// membuat program todo (convert array multidimentional to object of array)
​
// function todo (listTodos) {
//   let obj = {};
//   for (let i = 0; i < listTodos.length; i++) {
//     if(!obj[listTodos[i][1]]){
//       obj[listTodos[i][1]] = [listTodos[i][0]]
//     } else {
//       for (const x in obj) {
//         if (x == listTodos[i][1]) {
//           obj[x].push(listTodos[i][0]);
//         }
//       }
//     }
//   }
//   return obj
// }
​
// function todo (listTodos) {
//   let obj = {}
//   for (let i = 0; i < listTodos.length; i++) {
//     if (!obj[listTodos[i][1]]) {
//       obj[listTodos[i][1]] = []
//     }
//     console.log(obj)

//     obj[listTodos[i][1]].push(listTodos[i][0])
//   }
//   return obj
// }
​
// let todos = [
//   ['mencari one piece','urgent','done'],
//   ['makan siang','low','done'],
//   ['memperbaiki kapal','low','pending'],
//   ['mengalahkan big mom','urgent','pending']
// ]
// console.log(todo(todos));
​
/**
​
{
  urgent : [
    'mencari one piece',
    'mengalahkan big mom'
  ],
  low : [
    'makan siang',
    'memperbaiki kapal'
  ]
}
​
 */
​
 //--------------------------------
 /**
​
{
  urgent : {
    done : ['mencari one piece'],
    pending :['mengalahkan big mom']
  },
  low : {
    done : ['makan siang'],
    pending : ['memperbaiki kapal']
  }
}
​
 */
// function todo (listTodos) {
//   let obj = {}
//   for (let i = 0; i < listTodos.length; i++) {
//     if (!obj[listTodos[i][1]]) {
//       obj[listTodos[i][1]] = {
//         done : [],
//         pending: []
//       }
//     }
//     obj[listTodos[i][1]][listTodos[i][2]].push(listTodos[i][0])
//   }
//   return obj
// }
​
// let todos = [
//   ['mencari one piece','urgent','done'],
//   ['makan siang','low','done'],
//   ['memperbaiki kapal','low','pending'],
//   ['mengalahkan big mom','urgent','pending']
// ]
// console.log(todo(todos));
​
//-------------------------------------------------------------
​
// challenge
// function nameGrouping (data) {
//   let result = {}
//   for (let i = 0; i < data.length; i++) {
//     if (!result[data[i].name[0]]) {
//       result[data[i].name[0]] = []
//     }
//     result[data[i].name[0]].push({
//       name: data[i].name,
//       age: data[i].age
//     })
//   }
​
//   return result
// }
// let personData = [
//   {
//     name: 'sasuke',
//     age: 24
//   },
//   {
//     name: 'sakura',
//     age: 23
//   },
//   {
//     name: 'hinata',
//     age: 23
//   },
//   {
//     name: 'naruto',
//     age: 24
//   },
//   {
//     name: 'himawari',
//     age: 12
//   },
//   {
//     name: 'sukirman',
//     age: 25
//   }
// ]
// console.log(nameGrouping(personData));
// output
// {
//   's': [
//     {name: 'sasuke',age: 24},
//     {name: 'sakura',age: 23},
//     {name: 'sukirman',age: 25}
//   ],
//   'h': [
//     {name: 'hinata',age: 23},
//     {name: 'himawari',age: 12}
//   ],
//   'n': [
//     {name: 'naruto',age: 24}
//   ]
// }
​
//-------------------------------------------------------------
​
/*
=============
Report Market
=============
​
[INSTRUCTION]
reportMarket adalah sebuah function yang menerima parameter berupa array of object.
Yang harus mengeluarkan hasil sebuah object yang memiliki isi key berdasarkan jenis fruit.
lalu di dalamnya akan berisi list customers, total qty, max dan min pada setiap jenis fruit
​
[EXAMPLE]
Contoh input dan output bisa dilihat di test case. adapun format object sbb:
{
  <name fruit>: {
    customers: [<name_customer>],
    sum: <total_qty>,
    max: <qty terbesar setiap customer pesan>,
    min: <qty terkecil setiap customer pesan>
  }
}
​
[RULE]
1. dilarang menggunakan indexOf(), find(), filter()
2. dilarang menggunakan regex
*/
​
function reportMarket (data) {
  let result = {}
  for (let i = 0; i < data.length; i++) {
    if(!result[data[i].fruit]) {
      result[data[i].fruit] = {
        customer : [],
        sum: 0,
        max: 0,
        min:data[i].qty
      }
    }
    result[data[i].fruit].customer.push(data[i].name)
    result[data[i].fruit].sum += data[i].qty
    if(result[data[i].fruit].max < data[i].qty) {
      result[data[i].fruit].max = data[i].qty
    }
    if(result[data[i].fruit].min > data[i].qty) {
      result[data[i].fruit].min = data[i].qty
    }
  }
  return result
}


  console.log(reportMarket([
    { name: "Tsubasa", fruit: "Banana", qty: 16 },
    { name: "Misaki", fruit: "Apple", qty: 7 },
    { name: "Taqi", fruit: "Banana", qty: 8 },
    { name: "Hyuga", fruit: "Melon", qty: 7 },
    { name: "Wakabayashi", fruit: "Melon", qty: 9 },
    { name: "Zudo", fruit: "Apple", qty: 10 },
    { name: "Misugi", fruit: "Banana", qty: 9 },
    { name: "Tachibana", fruit: "Melon", qty: 5 },
    { name: "Wakasimatsu", fruit: "Apple", qty: 7 },
    { name: "Soda", fruit: "Apple", qty: 7 }
  ]));
  /*
  { Banana:
     { customer: [ 'Tsubasa', 'Taqi', 'Misugi' ],
       sum: 33,
       max: 16,
       min: 8 },
    Apple:
     { customer: [ 'Misaki', 'Zudo', 'Wakasimatsu', 'Soda' ],
       sum: 31,
       max: 10,
       min: 7 },
    Melon:
     { customer: [ 'Hyuga', 'Wakabayashi', 'Tachibana' ],
       sum: 21,
       max: 9,
       min: 5 }
      }
  */
