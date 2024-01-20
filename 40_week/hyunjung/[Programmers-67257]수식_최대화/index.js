function solution(expression) {
  const expressions = ['+-*', '+*-', '-*+', '-+*', '*+-', '*-+']
  let max = 0
  let tokens = expression.match(/(\d+|[-+*/])/g)
  // 	['100', '-','200', '*', '300', '-', '500', '+', '20']
  expressions.forEach((ex) => {
    let tokens_c = tokens.slice()
    ex.split('').forEach((e) => {
      for (let i = 0; i < tokens_c.length; i++) {
        if (e === tokens_c[i]) {
          //+
          let temp
          if (e === '+') {
            temp = +tokens_c[i - 1] + +tokens_c[i + 1]
          } else if (e === '*') {
            temp = tokens_c[i - 1] * tokens_c[i + 1]
          } else {
            temp = tokens_c[i - 1] - tokens_c[i + 1]
          }
          tokens_c.splice(i - 1, 3, temp)
          i--
        }
      }
    })
    max = Math.max(max, Math.abs(Number(tokens_c[0])))
  })

  return max
}
