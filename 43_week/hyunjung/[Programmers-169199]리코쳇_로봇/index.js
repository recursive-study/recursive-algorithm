function solution(board) {
  let answer = 0
  const boardMap = board.map((map) => map.split(''))
  const queue = []
  const dx = [-1, 1, 0, 0]
  const dy = [0, 0, -1, 1]

  for (let i = 0; i < boardMap.length; i++) {
    for (let j = 0; j < boardMap[0].length; j++) {
      if (boardMap[i][j] === 'R') {
        queue.push([i, j])
        boardMap[i][j] = '0'
      }
    }
  }

  while (queue.length) {
    // [[0,6]]
    const size = queue.length //1

    for (let i = 0; i < size; i++) {
      const [x, y] = queue.shift()

      for (let j = 0; j < 4; j++) {
        //
        let nx = x + dx[j]
        let ny = y + dy[j]

        // 게임판 범위 내 && D를 만나지 않을 경우 미끄러짐
        while (nx >= 0 && nx < boardMap.length && ny >= 0 && ny < boardMap[0].length && boardMap[nx][ny] !== 'D') {
          nx += dx[j]
          ny += dy[j]
        }
        // console.log('위치',nx,ny) // -1,6
        // 현재 위치로 변경 0,6
        nx -= dx[j]
        ny -= dy[j]

        if (boardMap[nx][ny] === 'G') return answer + 1
        if (boardMap[nx][ny] !== '0') {
          boardMap[nx][ny] = '0'
          queue.push([nx, ny])
        }
      }
    }
    answer++
  }
  return -1
}
