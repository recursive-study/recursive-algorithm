function solution(n) {
  const hanoi = (start, end, temp, N) => {
    if (N === 1) {
      return [[start, end]]
    } else {
      return hanoi(start, temp, end, N - 1)
        .concat([[start, end]])
        .concat(hanoi(temp, end, start, N - 1))
    }
  }
  return hanoi(1, 3, 2, n)
}

// 1. n-1 원판을 모두 temp로 이동
// 2. start에 있는 원판을 end로 이동
// 3. temp에 있는 원판을 end로 이동
