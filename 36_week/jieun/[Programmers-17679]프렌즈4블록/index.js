function solution(m, n, board) {
	board = board.map((line) => line.split(''));

	while (true) {
		let find = [];
		for (let y = 0; y < m - 1; y++) {
			for (let x = 0; x < n - 1; x++) {
				const pick = board[y][x];
				if (pick && pick === board[y][x + 1] && pick === board[y + 1][x] && pick === board[y + 1][x + 1]) {
					find.push([y, x]);
				}
			}
		}

		// 찾은 블럭이 없다면 게임 종료 (삭제된 블럭의 개수 리턴)
		if (!find.length) return board.flat().filter((v) => !v).length;

		// 찾은 블럭들을 0으로 바꿔준다.
		find.forEach(([y, x]) => {
			board[y][x] = 0;
			board[y][x + 1] = 0;
			board[y + 1][x] = 0;
			board[y + 1][x + 1] = 0;
		});

		// 값이 0이된 블럭들을 위에서 아래로 내려준다.
		for (let y = m - 1; y >= 0; y--) {
			for (let x = n - 1; x >= 0; x--) {
				// i는 한 줄 위의 y를 나타냄
				for (let i = y - 1; i >= 0; i--) {
					if (board[y][x]) break;
					if (board[i][x]) {
						// 내려올 윗 블럭이 있다면
						board[y][x] = board[i][x]; // 내려준다.
						board[i][x] = 0;
						break;
					}
				}
			}
		}
	}
}
