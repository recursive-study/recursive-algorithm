const fs = require('fs')
const readFileSyncAddress = process.platform === 'linux' ? '/dev/stdin' : './예제.txt'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')

const n = +input.shift()
const arr = input.map((r) => r.split(' ')).map((way) => way.map((w) => +w))

const solution = (n, arr) => {
  const subway = Array.from({length: n + 1}, () => Array())
  arr.forEach((el) => {
    const [from, to] = el
    subway[from].push(to)
    subway[to].push(from)
  })

  const visited = new Array(n + 1).fill(0)
  let flag = 0
  let cycle
  let start

  const DFS = (cnt, idx) => {
    if (flag) return

    for (let s of subway[idx]) {
      if (!visited[s]) {
        visited[s] = 1
        DFS(cnt + 1, s)
        visited[s] = 0
      } else if (cnt >= 3 && s === start) {
        flag = 1 // 방문 노드 3개 이상, 다음이 시작노드
        cycle = visited.slice()
        return
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    start = i
    visited[i] = 1
    DFS(1, i)
    visited[i] = 0
    if (flag) break
  }

  const BFS = (i) => {
    const q = []
    q.push(i)
    let dist = 0
    const visited2 = new Array(n + 1).fill(0)
    visited2[i] = 1
    while (true) {
      dist++
      const qLength = q.length
      for (let i = 0; i < qLength; i++) {
        const from = q.shift()
        for (let to of subway[from]) {
          if (cycle[to]) {
            return dist
          }

          if (!visited2[to]) {
            visited2[to] = 1
            q.push(to)
          }
        }
      }
    }
  }
  let result = []
  for (let i = 1; i <= n; i++) {
    if (cycle[i]) {
      result.push(0)
      continue
    }
    result.push(BFS(i))
  }
  return result.join(' ')
}

const answer = solution(n, arr)
console.log(answer)
