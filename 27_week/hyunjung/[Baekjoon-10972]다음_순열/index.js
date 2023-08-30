const fs = require('fs')
// const readFileSyncAddress = '/dev/stdin'
const readFileSyncAddress = './예제.txt'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')
const n = +input.shift()
const prev = input.shift().split(' ').map(Number)
const next = [...prev].sort((a, b) => b - a) //사전 순으로 마지막

if (prev.every((i, idx) => next[idx] === i)) {
  console.log(-1)
} else {
  // 배열의 뒤에서 오름차순이 깨지는 순간의 인덱스 구하기(i)
  let i = n - 2
  while (prev[i] > prev[i + 1]) i--

  // 해당 인덱스(i)의 뒤에 있는 숫자 중에 가장 작은 값을 가지는 인덱스 구하기(j)
  let j = n - 1
  while (prev[i] > prev[j]) {
    j--
  }

  //21543
  // i  j

  // i와 j swap
  ;[prev[i], prev[j]] = [prev[j], prev[i]]

  // console.log(prev) // 23 541

  // i 뒤의 값들을 오름차순으로 정렬
  let result = []

  result.push(prev.slice(0, i + 1).join(' '))
  result.push(
    prev
      .slice(i + 1)
      .sort((a, b) => a - b)
      .join(' ')
  )
  console.log(result.join(' ').trim())
}
