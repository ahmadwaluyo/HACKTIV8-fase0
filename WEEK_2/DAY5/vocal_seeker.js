function vocalSeeker(board) {
  // Write your code here
  let temp = '';

  for (let i = 0; i < board.length; i++) {
    temp = '';
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'a' || board[i][j] === 'i' || board[i][j] === 'u' || board[i][j] === 'e' || board[i][j] === 'o' || board[i][j] === 'A' || board[i][j] === 'I' || board[i][j] === 'U' || board[i][j] === 'E' || board[i][j] === 'O') {
        temp += board[i][j];
      }
    }
  }
return `vokal ditemukan ${temp.length} dan kumpulan vokal adalah ${temp}`;
}

//DRIVER CODE
let board = [
  ['*', '*', '*', 10],
  ['*', '*', -5, -10, '*', 100],
  ['a', 'A', 'o', 'b']
]

console.log(vocalSeeker(board)); // vokal ditemukan 3 dan kumpulan vokal adalah aAo
