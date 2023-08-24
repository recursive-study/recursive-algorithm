const fs = require('fs')
const readFileSyncAddress = '/dev/stdin'
// const readFileSyncAddress = './예제.txt'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')
const n = +input.shift()
const prev = input.shift().split(' ').map(Number)
const next = [...prev].sort((a, b) => b - a)

if (prev.every((i, idx) => next[idx] === i)) {
  console.log(-1)
} else {
  let tempIdx = 0
  for (let i = n - 1; i >= 0; i--) {
    if (prev[i] > prev[i - 1]) {
      tempIdx = i - 1
      break
    }
  }

  let tempIdx2 = 0
  let change2Value = Number.MAX_SAFE_INTEGER
  for (let i = tempIdx + 1; i < n; i++) {
    if (prev[i] > prev[tempIdx]) {
      change2Value = Math.min(change2Value, prev[i])
    }
  }

  tempIdx2 = prev.indexOf(change2Value)

  let temp = prev[tempIdx]
  prev[tempIdx] = change2Value
  prev[tempIdx2] = temp

  let result = []
  result.push(prev.slice(0, tempIdx + 1).join(' '))
  result.push(
    prev
      .slice(tempIdx + 1)
      .sort((a, b) => a - b)
      .join(' ')
  )

  console.log(result.join(' ').trim())
}
