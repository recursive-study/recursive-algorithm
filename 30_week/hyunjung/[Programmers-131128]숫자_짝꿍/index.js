function solution(X, Y) {
  const getCountLen = (num, i) => {
    return num.split('').filter((el) => +el === i).length
  }

  let result = ''

  for (let i = 9; i >= 0; i--) {
    const count = Math.min(getCountLen(X, i), getCountLen(Y, i))
    result += `${i}`.repeat(count)
  }

  if (result === '') {
    return '-1'
  } else if (result[0] === '0') {
    return '0'
  } else {
    return result
  }
}
