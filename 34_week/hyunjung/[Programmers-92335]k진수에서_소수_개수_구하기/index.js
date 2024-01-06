function solution(n, k) {
  let answer = 0
  let nk = n.toString(k).split('0')

  nk.forEach((el) => {
    if (el !== '') {
      if (isPrime(parseInt(el))) {
        answer++
      }
    }
  })
  return answer
}

const isPrime = (n) => {
  if (n === 1) return false // 1은 소수가 아님

  for (let i = 2; i <= Math.sqrt(n); i++) {
    // n의 제곱근까지 순회
    if (n % i === 0) return false // 한번이라도 나누어 떨어지면 소수가 아니다
  }

  return true
}
