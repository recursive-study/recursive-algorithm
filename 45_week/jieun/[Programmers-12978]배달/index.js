function solution(N, road, K) {
	// 인접 리스트를 그래프로 만든다.
	const graph = Array.from(Array(N + 1), (_, i) => [[i, 0]]); // 자기 자신으로 가는 시간은 0으로 초기화

	for (const [from, to, time] of road) {
		graph[from].push([to, time]);
		graph[to].push([from, time]);
	}
	console.info(graph);

	// 1번 마을에서 다른 마을까지 걸리는 시간을 저장할 배열
	const distance = Array(N + 1).fill(Infinity);

	// BFS
	const queue = [[1, 0]]; // [시작 마을, 시간]
	while (queue.length) {
		const [from, dist] = queue.shift();

		for (const [to, time] of graph[from]) {
			const accTime = dist + time; // 시간 누적
			if (accTime < distance[to]) {
				// 방문한적 없거나, 방문한적 있지만 최소시간이 아닐 때
				queue.push([to, accTime]); // 큐에 추가
				distance[to] = accTime;
			}
		}
	}
	console.info(distance);
	return distance.slice(1).filter((time) => time <= K).length;
}
