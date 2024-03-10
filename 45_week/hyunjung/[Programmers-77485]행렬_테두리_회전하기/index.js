function solution(rows, columns, queries) {
  const answer = []
  const rec = []
  let num = 1

  for (let i = 0; i < rows; i++) {
    let row = []
    for (let j = 0; j < columns; j++) {
      row.push(num++)
    }
    rec.push(row)
  }

  queries.forEach((query) => {
    query = query.map((el) => el - 1)

    const [x1, y1, x2, y2] = query
    const temp = rec[x1][y1]
    const border = []

    // 위쪽으로 이동
    for (let i = x1; i < x2; i++) {
      rec[i][y1] = rec[i + 1][y1]
      border.push(rec[i + 1][y1])
    }

    // 왼쪽 열로 이동
    for (let i = y1; i < y2; i++) {
      rec[x2][i] = rec[x2][i + 1]
      border.push(rec[x2][i + 1])
    }

    // 아래쪽으로 이동
    for (let i = x2; i > x1; i--) {
      rec[i][y2] = rec[i - 1][y2]
      border.push(rec[i - 1][y2])
    }

    // 오른쪽 열로 이동
    for (let i = y2; i > y1; i--) {
      rec[x1][i] = rec[x1][i - 1]
      border.push(rec[x1][i - 1])
    }

    rec[x1][y1 + 1] = temp
    border.push(temp)

    answer.push(Math.min(...border))
  })

  return answer
}
