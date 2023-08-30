const fs = require('fs')
// const readFileSyncAddress = '/dev/stdin'
const readFileSyncAddress = './예제.txt'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')
const n = +input.shift()
const prev = input.shift().split(' ').map(Number)
const next = [...prev].sort((a, b) => a - b)

if (prev.every((i, idx) => next[idx] === i)) {
  console.log(-1)
} else {
  let i = n - 2
  while (prev[i] < prev[i + 1]) i--

  let j = n - 1
  while (prev[i] < prev[j]) {
    j--
  }

  ;[prev[i], prev[j]] = [prev[j], prev[i]]

  let result = []

  result.push(prev.slice(0, i + 1).join(' '))
  result.push(
    prev
      .slice(i + 1)
      .sort((a, b) => b - a)
      .join(' ')
  )
  console.log(result.join(' ').trim())
}
