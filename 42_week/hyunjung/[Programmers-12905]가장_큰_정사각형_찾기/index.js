function solution(board) {
  let ans = 0
  const row = board.length
  const col = board[0].length

  // 행 || 열이 1보다 작으면 최대 넓이 1
  if (row <= 1 || col <= 1) return 1

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (board[i][j] !== 0) {
        board[i][j] = Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]) + 1 // 왼쪽 위, 왼쪽, 위쪽 +1 할당
      }
      if (ans < board[i][j]) ans = board[i][j]
    }
    // console.log(board)
  }
  return ans * ans
}
