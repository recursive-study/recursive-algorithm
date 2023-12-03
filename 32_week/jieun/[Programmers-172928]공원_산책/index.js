function solution(park, routes) {
  let [row, col] = [0, 0]

  // park를 2차원 배열로 변경
  const parkMap = Array.from(park, (parkRow, idx1) =>
    Array.from(parkRow, (space, idx2) => {
      if (space === 'S') {
        ;[row, col] = [idx1, idx2]
        return 1
      } else if (space === 'X') {
        return 0
      } else {
        return 1
      }
    })
  )

  routes.forEach((route) => {
    const [op, n] = route.split(' ') //E,2

    let [tempRow, tempCol] = [row, col]
    let flag = true

    for (let i = 0; i < +n; i++) {
      if (op === 'E') tempCol++
      else if (op === 'W') tempCol--
      else if (op === 'S') tempRow++
      else if (op === 'N') tempRow--

      if (
        tempRow > parkMap.length - 1 ||
        tempRow < 0 ||
        tempCol > parkMap[0].length - 1 ||
        tempCol < 0 ||
        parkMap[tempRow][tempCol] === 0
      ) {
        flag = false
        break
      }
    }
    if (flag) [row, col] = [tempRow, tempCol]
  })

  return [row, col]
}
