function solution(arr) {
  const answer = [0, 0]
  const m = arr.length

  const check = (x, y, length) => {
    const first = arr[x][y] // 첫번째 값이 0이면 나중에 answer[0]++
    const half = Math.floor(length / 2)

    for (let i = x; i < x + length; i++) {
      for (let j = y; j < y + length; j++) {
        if (arr[i][j] !== first) {
          check(x, y, half) // 왼쪽 위
          check(x + half, y, half) // 오른쪽 위
          check(x, y + half, half) // 왼쪽 아래
          check(x + half, y + half, half) // 오른쪽 아래

          return
        }
      }
    }

    answer[first]++ //answer[0] 혹은 answer[1]에서 1 추가
  }

  check(0, 0, m)

  return answer
}
