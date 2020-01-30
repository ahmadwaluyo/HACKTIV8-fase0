/*
Olah Data Instruktur
Buatlah sebuah function yang menerima input berupa array-of-object yang berisi nama, campus instruktur bertugas, dan phase instruktur mengajar.
function `sortingInstructor` akan mengelompokan instruktur menjadi 2 kelompok berdasarkan campus tempat masing-masing instruktur bertugas.
dan di masing-masing kampus tersebut, akan terbagi juga menjadi phase-phase dimana instruktur tersebut mengajar.
Contoh :
- input :
  [
    {name: "Tony", campus: "PIM" , phase: "2"},
    {name: "Audrick", campus: "PIM" , phase: "0"},
    {name: "Isro", campus: "MCC" , phase: "1"},
    {name: "Hary Dimas", campus: "MCC" , phase: "2"},
    {name: "Ziady", campus: "MCC" , phase: "2"},
  ]
- output :
  {
    PIM: { '0': [ 'Audrick' ], '2': [ 'Tony' ] },
    MCC: { '1': [ 'Isro' ], '2': [ 'Hary Dimas', 'Ziady' ] }
  }
Jika data yang dimasukan array kosong, maka ouputnya adalah `Empty file, please check again!`
Jika data yang dimasukan kosong, maka outputnya adalah`No data found!`
dan Jika ada 1 data `corruptedFile` dari array-of-object yang diterima, maka outputnya adalah `Corrupted file!`

Aturan Coding:
Dilarang menggunakan built-in function:
 - .map()
 - .filter()
 - .reduce()
*/ 

let listOfInstructors1 = [
    {name: "Arnold", campus: "MCC" , phase: "0"},
    {name: "Ziadi", campus: "MCC" , phase: "2"},
    {name: "Ayu", campus: "PIM" , phase: "0"},
    {name: "Edison", campus: "MCC" , phase: "1"},
    {name: "Armedi", campus: "PIM" , phase: "3"},
    {name: "Tony", campus: "PIM" , phase: "2"},
    {name: "Isro", campus: "PIM" , phase: "1"},
]

let listOfInstructors2 = [
    {name: "Icha", campus: "MCC" , phase: "2"},
    {name: "Nadia", campus: "PIM" , phase: "1"},
    {name: "Dimitri", campus: "PIM" , phase: "2"},
    {name: "Wika", campus: "MCC" , phase: "1"},
    {name: "Ardi", campus: "MCC" , phase: "0"},
    {name: "Rubhi", campus: "PIM" , phase: "2"},
    {name: "Adiel", campus: "PIM" , phase: "0"},
    {name: "Ricky", campus: "MCC" , phase: "0"},
    {name: "Ucup", campus: "PIM" , phase: "1"},
    {name: "Sofyan", campus: "MCC" , phase: "0"},
]

let corruptListOfInstructor = [
    {name: "Arnold", campus: "MCC" , phase: "0"},
    {name: "Ziadi", campus: "MCC" , phase: "2"},
    {name: "Ayu", campus: "PIM" , phase: "0"},
    "corruptedFile",
    {name: "Armedi", campus: "PIM" , phase: "3"},
    {name: "Stefani", campus: "PIM" , phase: "2"},
    {name: "Tony", campus: "PIM" , phase: "2"},
    {name: "Audrick", campus: "PIM" , phase: "0"},
    {name: "Isro", campus: "PIM" , phase: "1"},
]

function sortingInstructor(arr){
    // write your code here...
}

console.log(sortingInstructor(listOfInstructors1));
/* output yang di harapkan 
{
  MCC: { '0': [ 'Arnold' ], '1': [ 'Edison' ], '2': [ 'Ziadi' ] },
  PIM: {
    '0': [ 'Ayu' ],
    '1': [ 'Isro' ],
    '2': [ 'Tony' ],
    '3': [ 'Armedi' ]
  }
}
*/

console.log(sortingInstructor(listOfInstructors2));
/*
{
  MCC: {
    '0': [ 'Ardi', 'Ricky', 'Sofyan' ],
    '1': [ 'Wika' ],
    '2': [ 'Icha' ]
  },
  PIM: {
    '0': [ 'Adiel' ],
    '1': [ 'Nadia', 'Ucup' ],
    '2': [ 'Dimitri', 'Rubhi' ]
  }
}
*/   

console.log(sortingInstructor(corruptListOfInstructor));
/*
Corrupted file!
*/

console.log(sortingInstructor([]));
/*
Empty file, please check again!
*/

console.log(sortingInstructor());
/*
No data found!
*/