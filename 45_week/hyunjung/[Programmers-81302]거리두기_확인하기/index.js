function solution(places) {
  const answer = []

  for (const place of places) {
    let safe = 1

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        // 거리두기 안 지킴
        if (place[i][j] === 'P' && !isSafe(place, i, j)) {
          safe = 0
          break
        }
      }
      if (!safe) break // 0이 된 경우 나머지 검사x
    }
    answer.push(safe)
  }
  return answer
}

const isSafe = (place, x, y) => {
  const dx = [0, 0, 1, -1]
  const dy = [1, -1, 0, 0]

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i]
    const ny = y + dy[i]

    if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
      // 맨해튼 거리 1
      if (place[nx][ny] === 'P') {
        return false
        // 빈 테이블인데 주변에 응시자가 있으면 안됨
      } else if (place[nx][ny] === 'O') {
        for (let j = 0; j < 4; j++) {
          const nnx = nx + dx[j]
          const nny = ny + dy[j]

          if (nnx >= 0 && nnx < 5 && nny >= 0 && nny < 5) {
            // 현재 응시자가 아니고 다른 응시자가 파티션 없이 있으면 false
            if ((nnx !== x || nny !== y) && place[nnx][nny] === 'P') {
              // console.log(x,y,nx,ny,nnx,nny) // 0 0 1 0 2 0
              return false
            }
          }
        }
      }
    }
  }
  return true
}
