class MinHeap {
  constructor() {
    this.heap = []
  }

  size() {
    return this.heap.length
  }

  swap(idx1, idx2) {
    ;[this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]]
  }

  push(value) {
    this.heap.push(value)
    let curIdx = this.heap.length - 1

    while (curIdx > 0 && this.heap[curIdx] < this.heap[Math.floor((curIdx - 1) / 2)]) {
      this.swap(curIdx, Math.floor((curIdx - 1) / 2))
      curIdx = Math.floor((curIdx - 1) / 2)
    }
  }

  pop() {
    if (this.heap.length === 0) return null
    if (this.heap.length === 1) return this.heap.pop()

    const min = this.heap[0]
    this.heap[0] = this.heap.pop()
    let curIdx = 0

    while (curIdx * 2 + 1 < this.heap.length) {
      let minChildIdx =
        curIdx * 2 + 2 < this.heap.length && this.heap[curIdx * 2 + 2] < this.heap[curIdx * 2 + 1]
          ? curIdx * 2 + 2
          : curIdx * 2 + 1

      if (this.heap[curIdx] < this.heap[minChildIdx]) {
        break
      }
      this.swap(curIdx, minChildIdx)
      curIdx = minChildIdx
    }
    return min
  }

  peek() {
    return this.heap[0]
  }
}

function solution(scoville, K) {
  const minHeap = new MinHeap()

  for (const s of scoville) {
    minHeap.push(s)
  }

  let count = 0

  while (minHeap.size() >= 2 && minHeap.peek() < K) {
    const first = minHeap.pop()
    const second = minHeap.pop()

    const mix = first + second * 2
    minHeap.push(mix)
    count++
  }

  return minHeap.peek() >= K ? count : -1
}
