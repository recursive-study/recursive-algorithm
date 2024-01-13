function solution(maps) {
  const w = maps[0].length // 가로
  const h = maps.length // 세로

  // visited 생성
  const visited = Array.from({length: h}, () => Array.from({length: w}, () => 0))

  const dx = [0, 1, 0, -1]
  const dy = [1, 0, -1, 0]

  const answer = []

  const search = (i, j) => {
    const q = []
    q.push([i, j])
    visited[i][j] = 1
    let cnt = +maps[i][j] //해당 칸에서 머물 수 있는 일자
    while (q.length) {
      let [x, y] = q.shift()
      for (let k = 0; k < 4; k++) {
        // 상하좌우 탐색
        let nx = x + dx[k]
        let ny = y + dy[k]
        // 맵을 벗어나는 경우
        if (nx < 0 || nx >= h || ny < 0 || ny >= w) {
          continue
        }
        // 방문한 적이 없고 X가 아니면
        if (!visited[nx][ny] && maps[nx][ny] !== 'X') {
          visited[nx][ny] = 1
          // console.log(visited)
          cnt += +maps[nx][ny] //14
          q.push([nx, ny]) // [0,2]
        }
      }
    }
    return cnt
  }

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (maps[i][j] !== 'X' && !visited[i][j]) {
        answer.push(search(i, j))
      }
    }
  }

  answer.sort((a, b) => a - b)
  return answer.length ? answer : [-1]
}
