function solution(arr) {
	const answer = [0, 0];

	function check(x, y, length) {
		const num = arr[x][y];
		const half = length / 2;

		for (let i = x; i < x + length; i++) {
			for (let j = y; j < y + length; j++) {
				if (arr[x][y] !== arr[i][j]) {
					check(x, y, half);
					check(x + half, y, half);
					check(x, y + half, half);
					check(x + half, y + half, half);
					return;
				}
			}
		}
		// 반복문을 통과했다면
		answer[num]++;
	}

	check(0, 0, arr.length);

	return answer;
}
