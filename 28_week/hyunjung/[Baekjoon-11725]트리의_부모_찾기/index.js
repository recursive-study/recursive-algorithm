const fs = require('fs')
const readFileSyncAddress = process.platform === 'linux' ? '/dev/stdin' : './예제.txt'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')
const n = +input.shift()
const arr = input.map((_arr) => _arr.split(' ')).map((el) => el.map((v) => parseInt(v)))

const tree = Array.from({length: n + 1}, () => new Array())

for (let [from, to] of arr) {
  tree[from].push(to)
  tree[to].push(from)
}

const parent = Array(n + 1).fill(0)

const bfs = () => {
  const q = [1]
  parent[1] = 1

  while (q.length) {
    const node = q.shift()

    tree[node].forEach((n) => {
      if (!parent[n]) {
        parent[n] = node // 부모 추가
        q.push(n)
      }
    })
  }
}

bfs()

console.log(parent.slice(2).join('\n'))
