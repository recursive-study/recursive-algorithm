function solution(board) {
	const rows = board.length;
	const cols = board[0].length;
	let maxSquareSize = 0;

	const dp = Array.from({ length: rows }, () => Array(cols).fill(0));

	if (rows === 1 && cols === 1) return board[0][0];

	// 첫 번째 행 복사
	for (let i = 0; i < rows; i++) {
		dp[i][0] = board[i][0];
	}

	// 첫 번째 열 복사
	for (let j = 0; j < cols; j++) {
		dp[0][j] = board[0][j];
	}

	for (let i = 1; i < rows; i++) {
		for (let j = 1; j < cols; j++) {
			if (board[i][j] === 1) {
				// 현재 위치의 값이 1인 경우
				// 4칸 중 하나라도 0이라면 0 + 1 = 1 할당
				// 4칸 모두 1이라면 1 + 1 = 2 할당
				dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
				maxSquareSize = Math.max(maxSquareSize, dp[i][j]);
			}
		}
	}

	return maxSquareSize ** 2; // 너비 반환
}
