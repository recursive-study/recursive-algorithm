const fs = require('fs')
// const readFileSyncAddress = '/dev/stdin'
const readFileSyncAddress = './예제.txt'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')
const n = +input.shift()
const arr = input.slice(0).map((str) => str.split(' '))

const solution = (arr) => {
  const tree = {}

  arr.forEach(([node, left, right]) => {
    tree[node] = [left, right]
  })

  let result = ''

  // 전위 순회 : 루트-왼쪽-오른쪽
  const preorder = (node) => {
    if (node === '.') return
    const [left, right] = tree[node]
    result += node // 노드 먼저 기록
    preorder(left)
    preorder(right)
  }
  // 중위 순회 : 왼쪽-루트-오른쪽
  const inorder = (node) => {
    if (node === '.') return
    const [left, right] = tree[node]
    inorder(left)
    result += node
    inorder(right)
  }
  // 후위 순회 : 왼쪽-오른쪽-루트
  const postorder = (node) => {
    if (node === '.') return
    const [left, right] = tree[node]
    postorder(left)
    postorder(right)
    result += node
  }

  preorder('A')
  result += '\n'
  inorder('A')
  result += '\n'
  postorder('A')

  return result
}

const result = solution(arr)
console.log(result)
