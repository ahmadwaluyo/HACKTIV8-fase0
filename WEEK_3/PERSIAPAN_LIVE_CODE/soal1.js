function findEmptySeat(arr, row) {
    // tulis kodemu dibawah ini
    let count = 0;
    let hasil = '';
​   for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === row) {
      for (let j = 0; j < arr[3].length; j++) {
        if (arr[3][j].length === 0) {
          count++;
          hasil += `${arr[i][0]}`
        }
      }
    }
  }
  return hasil;
  }

  var cinemaSeat2 = [
    ["ROW", "10", "11", "12", "13"],
    ["E", "X", "X", "X", "X"],
    ["F", " ", "X", " ", " "],
    ["G", "X", " ", "X", "X"],
    ["H", " ", " ", " ", "X"]
  ];

  console.log(findEmptySeat(cinemaSeat2, "G"));
  // Terdapat 1 bangku kosong, G11

  console.log(findEmptySeat(cinemaSeat2, "Z"));
  // Baris Z tidak tersedia

  var cinemaSeat = [
    ["ROW", "1", "2", "3", "4", "5", "6"],
    ["A", "X", "X", "X", "X", " ", " "],
    ["B", " ", "X", " ", " ", " ", " "],
    ["C", "X", "X", "X", "X", "X ", "X"],
    ["D", " ", " ", " ", "X", "X", "X"]
  ];

  console.log(findEmptySeat(cinemaSeat, "D"));
  // Terdapat 3 bangku kosong, D1, D2, D3

  console.log(findEmptySeat(cinemaSeat, "A"));
  // Terdapat 2 bangku kosong, A5, A6

  console.log(findEmptySeat(cinemaSeat, "C"));
  // // Bangku di baris C sudah penuh
