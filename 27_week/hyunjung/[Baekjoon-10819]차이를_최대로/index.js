const fs = require('fs')
// const readFileSyncAddress = '/dev/stdin'
const readFileSyncAddress = './예제.txt'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')
const n = +input.shift()
const arr = input
  .shift()
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b)

const solution = (n, arr) => {
  let result = new Set()
  let visited = new Array(n + 1).fill(false)
  let temp = []

  const dfs = (cnt) => {
    if (cnt === n) {
      let sum = 0
      for (let i = 0; i < n - 1; i++) {
        sum += Math.abs(temp[i] - temp[i + 1])
        result.add(sum)
      }
    } else {
      for (let i = 0; i < n; i++) {
        if (!visited[i]) {
          visited[i] = true
          temp.push(arr[i])
          dfs(cnt + 1)
          temp.pop()
          visited[i] = false
        }
      }
    }
  }
  dfs(0)
  return Math.max(...result)
}

console.log(solution(n, arr))
