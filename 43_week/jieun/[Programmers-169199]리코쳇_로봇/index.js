function solution(board) {
	const dx = [-1, 1, 0, 0];
	const dy = [0, 0, -1, 1];
	const queue = []; // [row, col, count]
	const rowLen = board.length;
	const colLen = board[0].length;
	const visited = Array.from({ length: rowLen }, () => Array(colLen).fill(false));

	for (let row = 0; row < rowLen; row++) {
		for (let col = 0; col < colLen; col++) {
			// 1. 로봇 찾기
			if (board[row][col] === 'R') {
				queue.push([row, col, 0]);
				visited[row][col] = true; // 로봇 시작 위치 방문 처리
			}
		}
	}

	// 큐가 빌 때까지 BFS 탐색
	while (queue.length) {
		const [y, x, count] = queue.shift();

		// Goal에 도착했다면 횟수를 리턴
		if (board[y]?.[x] === 'G') return count;

		// 상하좌우로 탐색
		for (let i = 0; i < 4; i++) {
			let nx = x;
			let ny = y;

			// D를 만나기 전까지 미끄러지며 이동 가능한 위치를 찾기
			while (true) {
				let nextX = nx + dx[i];
				let nextY = ny + dy[i];

				// 이동 불가하면 반복문 탈출
				if (nextX < 0 || nextY < 0 || nextX >= colLen || nextY >= rowLen || board[nextY][nextX] === 'D') break;

				// 이동 가능하면 위치 업데이트
				nx = nextX;
				ny = nextY;
			}

			// 찾은 위치 queue에 넣기
			if (!visited[ny][nx]) {
				visited[ny][nx] = true;
				queue.push([ny, nx, count + 1]);
			}
		}
	}
	return -1;
}
