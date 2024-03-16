function solution(maps) {
  const maze = maps.map((map) => map.split(''))
  let S = [],
    L = [],
    E = []

  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[0].length; j++) {
      let cur = maze[i][j]

      if (cur === 'L') {
        L = [i, j]
      }
      if (cur === 'E') {
        E = [i, j]
      }
      if (cur === 'S') {
        S = [i, j]
      }
    }
  }

  const dx = [-1, 1, 0, 0]
  const dy = [0, 0, -1, 1]

  const bfs = (start, end) => {
    let count = 0
    const queue = [[start, count]]
    const visited = Array.from({length: maze.length}, () => Array(maze[0].length).fill(false))
    visited[start[0]][start[1]] = true

    while (queue.length) {
      let [[x, y], count] = queue.shift()

      // 목표 지점에 도달했을 때
      if (x === end[0] && y === end[1]) {
        return count // 이동한 횟수를 반환
      }

      // 현재 위치에서 이동 가능한 다음 위치를 확인하고 큐에 추가
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i]
        const ny = y + dy[i]

        // 다음 위치가 미로의 범위 내에 있고, 벽이 아닐 때 + 방문하지 않았을 때
        if (nx >= 0 && nx < maze.length && ny >= 0 && ny < maze[0].length && maze[nx][ny] !== 'X' && !visited[nx][ny]) {
          queue.push([[nx, ny], count + 1]) // 다음 위치를 큐에 추가
          visited[nx][ny] = true
        }
      }
    }
    return -1
  }

  let first = bfs(S, L)
  let sec = bfs(L, E)
  if (first === -1 || sec === -1) return -1
  else return first + sec
}
