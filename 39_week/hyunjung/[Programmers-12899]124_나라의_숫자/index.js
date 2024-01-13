function solution(n) {
  const result = []

  while (n) {
    //3
    let t = n % 3 //    t = 0
    if (t === 0) {
      // 3의 배수인 경우
      t = 4
      n -= 1
    }
    result.push(t.toString()) //'4'
    n = Math.floor(n / 3) // 0
  }
  // console.log(result) // [ '1', '1' ]
  return result.reverse().join('')
}
