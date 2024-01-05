function solution(n) {
  const tower = []

  for (let i = 1; i <= n; i++) {
    tower.push(new Array(i).fill(0))
  }

  let row = -1
  let col = 0

  let count = 1

  for (let i = n; i > 0; i -= 3) {
    //아래로 이동
    for (let j = 0; j < i; j++) {
      console.log(i)
      tower[++row][col] = count++
    }

    //오른쪽으로 이동
    for (let j = 0; j < i - 1; j++) {
      tower[row][++col] = count++
    }
    //왼쪽, 위쪽
    for (let j = 0; j < i - 2; j++) {
      tower[--row][--col] = count++
    }
  }
  return tower.flat()
}
