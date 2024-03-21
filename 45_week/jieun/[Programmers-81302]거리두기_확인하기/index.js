function isSafePlace(place) {
	const visited = Array.from(Array(5), () => Array(5).fill(false));
	const queue = [];

	const dx = [-1, 1, 0, 0];
	const dy = [0, 0, -1, 1];

	for (let i = 0; i < 5; i++) {
		for (let j = 0; j < 5; j++) {
			if (place[i][j] === 'P') {
				queue.push([i, j, 0]); // 모든 P를 탐색 시작점으로 큐에 추가
				visited[i][j] = true;

				while (queue.length) {
					const [x, y, dis] = queue.shift();

					if (dis > 2) break; // 거리가 2 초과면 더 이상 탐색하지 않음

					// 상하좌우 탐색
					for (let k = 0; k < 4; k++) {
						const nx = x + dx[k];
						const ny = y + dy[k];

						if (0 <= nx && nx < 5 && 0 <= ny && ny < 5 && !visited[nx][ny]) {
							visited[nx][ny] = true;
							if (place[nx][ny] === 'O') {
								// 빈 테이블이면 큐에 추가해서 이어서 탐색
								queue.push([nx, ny, dis + 1]);
							} else if (place[nx][ny] === 'P' && dis < 2) {
								// 사람이고 거리가 2 이하면
								return 0; // 거리두기 실패
							}
						}
					}
				}
			}
		}
	}
	// 모든 위치를 검사한 후 거리두기가 성공적이라면
	return 1;
}

function solution(places) {
	return places.map((place) => isSafePlace(place.map((row) => row.split(''))));
}
