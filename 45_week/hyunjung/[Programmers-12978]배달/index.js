function solution(N, road, K) {
  const graph = Array.from({length: N + 1}, () => [])

  road.forEach(([start, end, dis]) => {
    graph[start].push({end: end, dis: dis})
    graph[end].push({end: start, dis: dis})
  })

  /* 1번 노드 -> 각 노드까지 최단 경로 저장 */
  const route = Array.from({length: graph.length}, () => Infinity)
  // [ Infinity, 0, Infinity, Infinity, Infinity, Infinity ]

  const q = [{end: 1, dist: 0}]
  route[1] = 0

  while (q.length) {
    const {end} = q.pop()

    graph[end].forEach((next) => {
      const total = route[end] + next.dis
      if (route[next.end] > total) {
        route[next.end] = total // 작은 값으로 갱신
        q.push(next)
      }
    })
  }

  return route.filter((r) => r <= K).length
}
