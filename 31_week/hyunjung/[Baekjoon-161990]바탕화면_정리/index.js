function solution(wallpaper) {
  let X = []
  let Y = []

  wallpaper.forEach((wall, col) => {
    ;[...wall].forEach((w, row) => {
      if (w === '#') {
        Y.push(col)
        X.push(row)
      }
    })
  })

  console.log('X', X) // [1,2,3] 파일이 있는 칸의 x좌표
  console.log('Y', Y) // [0,1,2] 파일이 있는 칸의 y좌표

  X.sort((a, b) => a - b)
  Y.sort((a, b) => a - b)

  return [Y[0], X[0], Y[Y.length - 1] + 1, X[X.length - 1] + 1]
}

console.log(solution(['.#...', '..#..', '...#.']))
