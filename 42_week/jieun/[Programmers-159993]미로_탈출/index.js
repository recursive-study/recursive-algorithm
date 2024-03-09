function solution(maps) {
	const StoL = bfs('S', 'L', maps); // 1. S에서 L로 최단거리
	const LtoE = bfs('L', 'E', maps); // 2. L에서 E로 최단거리
	console.log(StoL, LtoE);

	return StoL === -1 || LtoE === -1 ? -1 : StoL + LtoE;
}

function bfs(from, to, maps) {
	const dx = [0, 1, 0, -1]; // 위, 왼, 아래, 오 탐색
	const dy = [-1, 0, 1, 0];
	const check = Array.from({ length: maps.length }, () => new Array(maps[0].length).fill(false));
	const queue = [];

	// 출발 지점 찾기
	for (let y = 0; y < maps.length; y++) {
		for (let x = 0; x < maps[0].length; x++) {
			if (maps[y][x] === from) {
				// 출발 지점 찾아서
				queue.push([y, x, 0]); // queue에 넣고 (0은 거리)
				check[y][x] = true; // 방문 처리
			}
		}
	}

	// 도착 지점까지의 거리 구하기
	while (queue.length) {
		const [y, x, dis] = queue.shift();

		for (let i = 0; i < 4; i++) {
			const nx = x + dx[i];
			const ny = y + dy[i];

			// nx, ny가 범위 안에 있고, X가 아니고, 방문한 적 없다면
			if (maps[ny] && maps[ny][nx] && maps[ny][nx] !== 'X' && !check[ny][nx]) {
				queue.push([ny, nx, dis + 1]); // 큐에 넣어주고, 거리 + 1
				check[ny][nx] = true; // 방문 처리

				if (maps[ny][nx] === to) return dis + 1; // 도착지점을 찾으면 리턴
			}
		}
	}
	return -1; // 다 돌 때까지 도착지점 못찾은 경우
}
