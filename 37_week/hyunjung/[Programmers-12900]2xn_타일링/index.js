function solution(n) {
  const arr = Array.from({length: n + 1}, () => 0)

  arr[1] = 1
  arr[2] = 2

  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 1] % 1000000007) + (arr[i - 2] % 1000000007)
  }

  return arr[n] % 1000000007
}
