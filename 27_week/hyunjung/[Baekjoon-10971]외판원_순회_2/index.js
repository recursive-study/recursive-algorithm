const fs = require('fs')
// const readFileSyncAddress = '/dev/stdin'
const readFileSyncAddress = './예제.txt'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')
const n = +input.shift()
const arr = input.slice(0).map((str) => str.split(' ').map(Number))
const visited = new Array(n).fill(0)
let minCost = 1000000 * n

const getCost = (start, cnt, cost) => {
  if (arr[start][0] !== 0 && cnt === n - 1) {
    // 시작 도시로 돌아가는 비용 추가 후 리턴
    minCost = Math.min(minCost, cost + arr[start][0])
    return
  } else {
    for (let i = 0; i < n; i++) {
      // 방문한 적이 없고 갈 수 있는 경우
      if (!visited[i] && arr[start][i] !== 0) {
        visited[i] = true
        getCost(i, cnt + 1, cost + arr[start][i])
        visited[i] = false
      }
    }
  }
}

visited[0] = true // 첫 번째 도시 방문처리
getCost(0, 0, 0)

console.log(minCost)
