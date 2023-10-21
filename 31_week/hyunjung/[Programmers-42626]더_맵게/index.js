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

    /**
     * 1. 요소가 두 개 이상이고 부모(Math.floor((curIdx - 1) / 2)보다 자식(curIdx)의 값이 더 작으면 바꿔준다(오름차순 정렬)
     * 2. 검사할 인덱스(curIdx)를 부모의 인덱스로 바꿔준다
     */
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

    /**
     * 왼쪽 자식(curIdx*2+1)과 오른쪽 자식(curIdx*2+2)을 비교해서 더 작은 자식을 부모와 교체
     */
    while (curIdx * 2 + 1 < this.heap.length) {
      // 왼쪽 자식이 존재하면
      let minChildIdx =
        curIdx * 2 + 2 < this.heap.length && this.heap[curIdx * 2 + 2] < this.heap[curIdx * 2 + 1]
          ? curIdx * 2 + 2
          : curIdx * 2 + 1

      // 가장 작은 자식보다 부모자식이 작으면 멈추기
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

  // console.log(minHeap) // MinHeap { heap: [ 1, 2, 3, 9, 10, 12 ] }

  let count = 0

  while (minHeap.size() >= 2 && minHeap.peek() < K) {
    const first = minHeap.pop()
    const second = minHeap.pop()

    const mix = first + second * 2
    minHeap.push(mix)
    count++
  }

  return minHeap.peek() >= K ? count : -1 // 가장 앞에 있는 요소(최솟값)가 스코빌 지수(K)를 넘으면 횟수 반환
}

console.log(solution([1, 2, 3, 9, 10, 12], 7))
