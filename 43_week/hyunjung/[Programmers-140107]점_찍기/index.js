function solution(k, d) {
  let count = 0

  for (let x = 0; x <= d; x += k) {
    // k씩 증가
    const max_y = parseInt(Math.sqrt(d ** 2 - x ** 2))
    count += parseInt(max_y / k) + 1
  }

  return count
}
