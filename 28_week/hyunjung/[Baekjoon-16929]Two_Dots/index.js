const fs = require('fs')
const readFileSyncAddress = process.platform === 'linux' ? '/dev/stdin' : './예제.txt'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')
const [n, m] = input[0].split(' ').map((v) => +v)
const board = input.slice(1).map((r) => r.split(''))
const visited = Array.from({length: n}, () => Array(m).fill(0))

let cycle = false
const dx = [-1, 0, 1, 0]
const dy = [0, 1, 0, -1]

const dfs = (x, y, cnt) => {
  if (cycle) return

  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]]

    if (nx < 0 || ny < 0 || nx >= n || ny >= m) {
      continue
    }

    if (board[nx][ny] !== board[start.x][start.y]) continue // 현재 색과 다른 경우

    if (!visited[nx][ny]) {
      visited[nx][ny] = true
      dfs(nx, ny, cnt + 1)
      visited[nx][ny] = false
      continue
    }

    if (cnt >= 4 && nx === start.x && ny === start.y) {
      cycle = true
      return
    }
  }
}

let start
for (let x = 0; x < n; x++) {
  for (let y = 0; y < m; y++) {
    start = {x, y}
    visited[x][y] = true
    dfs(x, y, 1)
    visited[x][y] = false
    if (cycle) break
  }
}

console.log(cycle ? 'Yes' : 'No')
