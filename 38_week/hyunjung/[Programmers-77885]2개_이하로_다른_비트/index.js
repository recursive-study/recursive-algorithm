function solution(numbers) {
  const f = (x) => {
    // 짝수인 경우 끝이 0으로 끝나므로 1을 더한 수가 정답
    if (x % 2 === 0) return x + 1

    // 홀수인 경우 (7)
    let bit = '0' + x.toString(2) // 0111
    let idx = bit.lastIndexOf('0') //0

    // 처음 나오는 0=>1, 그 뒷자리 1=>0 // 1011(11)
    return parseInt(`${bit.slice(0, idx)}10${bit.slice(idx + 2)}`, 2)
  }
  const answer = []
  numbers.forEach((num) => answer.push(f(num)))
  return answer
}
