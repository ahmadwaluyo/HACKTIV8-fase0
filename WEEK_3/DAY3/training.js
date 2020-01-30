function graduates (students) {
  // Code disini
  let hasil = {};
  let akhir = {};
  for (let i = 0; i < students.length; i++) {
        if (!hasil[students[i]['class']]) {
          hasil[students[i]['class']] = [];
        }
        akhir = {name:'', score:0};
        akhir.name = students[i].name;
        akhir.score = students[i].score;

      if (students[i]['score'] > 75) {
        hasil[students[i]['class']].push(akhir);
      }
      return hasil;
  }
}

console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));
