function solution(data, col, row_begin, row_end) {
  let sortedData = data.sort((a, b) => {
    if (a[col - 1] === b[col - 1]) {
      return a[0] < b[0] ? 1 : -1 //내림차순
    }
    return a[col - 1] > b[col - 1] ? 1 : -1 //오름차순
  })

  let answer = ''

  for (let i = row_begin - 1; i < row_end; i++) {
    //i=1
    const res = sortedData[i].reduce((acc, cur) => acc + (cur % (i + 1)), 0) //2
    answer = answer === '' ? res : answer ^ res
  }

  return answer
}
