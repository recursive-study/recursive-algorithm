//올바른 괄호 문자열 판별
const isCorrect = (p) => {
  let start = 0,
    end = 0
  let flag = true

  p.split('').forEach((i) => {
    i === '(' ? start++ : end++
    if (start < end) flag = false
  })

  return flag ? true : false
}

// 균형잡힌 괄호 문자열 판별
const isBalanced = (p) => {
  let start = 0,
    end = 0

  p.split('').forEach((i) => {
    i === '(' ? start++ : end++
  })

  return start === end ? true : false
}

function solution(p) {
  let answer = '',
    u = '',
    v = ''

  // 빈 문자열이나 올바른 괄호인 경우 그대로 반환
  if (!p.length || isCorrect(p)) return p

  // u를 균형잡힌 괄호 문자열 만들기
  for (let i = 0; i < p.length; i++) {
    if (isBalanced(p.slice(0, i + 1))) {
      u = p.slice(0, i + 1)
      v = p.slice(i + 1)
      console.log(u, v)
      break
    }
  }

  // 균형잡힌 괄호 문자열 u가 올바른 괄호인 경우
  if (isCorrect(u)) {
    answer += u + solution(v)
  } else {
    answer += '(' + solution(v) + ')'

    for (let i = 1; i < u.length - 1; i++) {
      u[i] === '(' ? (answer += ')') : (answer += '(')
    }
  }
  return answer
}
