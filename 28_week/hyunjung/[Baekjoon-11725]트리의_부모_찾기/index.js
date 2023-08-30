// 시간 초과
const fs = require('fs')
// const readFileSyncAddress = '/dev/stdin'
const readFileSyncAddress = './예제.txt'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')
const n = +input.shift()
const arr = input.map((_arr) => _arr.split(' ')).map((el) => el.map((v) => parseInt(v)))

const treeMap = new Map()

treeMap.set(1, 0) //  1번 노드에 부모가 있다고 가정

arr.forEach(([l, r]) => {
  if (treeMap.has(l)) {
    treeMap.set(r, l) // {자식:부모}
  } else {
    treeMap.set(l, r)
  }
})

// treeMap(7) { 1 => 0, 6 => 1, 3 => 6, 5 => 3, 4 => 1, 2 => 4, 7 => 4 }

const tree = [...treeMap]

tree.sort((a, b) => a[0] - b[0])
tree.forEach(([children, parent]) => {
  if (children !== 1) {
    console.log(parent)
  }
})
