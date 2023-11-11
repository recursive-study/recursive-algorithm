const solution = (dartResult) => {
  let temp = 0
  let result = []
  const re = /[0-9]/g

  for (let i = 0; i < dartResult.length; i++) {
    if (re.test(dartResult[i])) {
      // 숫자인 경우
      if (dartResult[i] === '1' && dartResult[i + 1] === '0') {
        temp = 10
        i++
      } else {
        temp = +dartResult[i]
      }
    } else {
      switch (dartResult[i]) {
        case 'S':
          result.push(temp)
          break
        case 'D':
          result.push(Math.pow(temp, 2))
          break
        case 'T':
          result.push(Math.pow(temp, 3))
          break
        case '#': // 아차상
          result[result.length - 1] *= -1
          break
        case '*': // 스타상(해당점수,직전점수 2배)
          result[result.length - 1] *= 2
          result[result.length - 2] *= 2
          break
      }
    }
  }
  return result.reduce((acc, cur) => acc + cur, 0)
}
