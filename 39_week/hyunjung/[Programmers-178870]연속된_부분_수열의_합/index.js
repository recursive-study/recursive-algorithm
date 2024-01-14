function solution(sequence, k) {
  // 투포인터

  let [left, right] = [0, 0]
  let sum = sequence[0]
  const result = []

  while (right < sequence.length) {
    if (sum === k) {
      result.push([left, right])
      right++
      sum += sequence[right]
    } else if (sum < k) {
      // 작으면 오른쪽 포인터 이동
      right++ // 이동 후 더해주기
      sum += sequence[right]
    } else if (sum > k) {
      // 크면 왼쪽 포인터 이동
      sum -= sequence[left]
      left++ // 빼고 이동
    }
  }

  //result 정렬
  // 1. 길이가 짧은 수열
  // 2. 앞쪽에 있는 수열

  result.sort((a, b) => {
    const len = Math.abs(a[0] - a[1]) - Math.abs(b[0] - b[1]) //[6,6]
    if (len !== 0) {
      return len // 길이가 더 짧은 값이 앞으로 감
    } else {
      a[0] - b[0] // 인덱스 순서로 정렬
    }
  })

  return result[0]
}

// 시간초과
function solution(sequence, k) {
  const search = (count) => {
    for (let i = 0; i <= sequence.length - count; i++) {
      let slice = sequence.slice(i, count + i)
      let slice_sum = slice.reduce((acc, cur) => acc + cur, 0)
      if (slice_sum === k) {
        return [i, i + count - 1]
      }
    }
  }

  for (let i = 1; i <= sequence.length; i++) {
    let result = search(i)
    if (result) {
      return result
    }
  }
}
