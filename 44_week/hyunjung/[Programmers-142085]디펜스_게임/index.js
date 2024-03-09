function solution(n, k, enemy) {
  const heap = new MinHeap() // 최소힙

  for (let i = 0; i < enemy.length; i++) {
    const e = enemy[i]

    n -= e
    heap.push(-1 * e)

    // 무
    if (n >= 0) continue
    // 무적권이 없거나 사용할 필요가 없으면 종료
    if (k === 0 || heap.size() === 0) return i

    // 무적권이 남은 경우 사용
    n -= heap.pop()
    k--
  }
  return enemy.length
}

class MinHeap {
  constructor() {
    this.heap = [null]
  }

  size() {
    return this.heap.length - 1
  }

  push(e) {
    this.heap.push(e)

    let curIdx = this.heap.length - 1 // 트리의 마지막에 추가
    let parentIdx = Math.floor(curIdx / 2) // 부모

    while (parentIdx >= 1 && this.heap[curIdx] < this.heap[parentIdx]) {
      this._swap(curIdx, parentIdx) // 부모가 크면 둘이 교체(작은 수가 위로)
      curIdx = parentIdx
      parentIdx = Math.floor(curIdx / 2)
    }
  }

  pop() {
    if (this.size() === 1) return this.heap.pop()
    const returnVal = this.heap[1] // [null, -4]
    this.heap[1] = this.heap.pop() // 마지막 요소를 맨 위로 올림

    let curIdx = 1
    let leftIdx = 2
    let rightIdx = 3

    if (this.size() === 1) {
      return returnVal
    } else if (this.size() === 2) {
      if (this.heap[leftIdx] < this.heap[curIdx]) {
        this._swap(leftIdx, curIdx)
      }
      return returnVal
    }

    while (this.heap[leftIdx] < this.heap[curIdx] || this.heap[rightIdx] < this.heap[curIdx]) {
      const minIndex = this.heap[leftIdx] <= this.heap[rightIdx] ? leftIdx : rightIdx
      this._swap(minIndex, curIdx)
      curIdx = minIndex
      leftIdx = curIdx * 2
      rightIdx = curIdx * 2 + 1
      if (leftIdx >= this.heap.length - 1) break
    }

    return returnVal
  }
  _swap(a, b) {
    ;[this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
  }
}
