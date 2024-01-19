function solution(n) {
	var answer = [];
	const arr = Array.from({ length: n }, () => new Array(n).fill(0));
	console.log(arr);

	const directions = [
		[1, 0],
		[0, 1],
		[-1, -1],
	];
	// 달팽이 모양 순서
	// 1. x는 그대로 y만 증가 (n번)
	// 2. x만 증가, y는 그대로 (n-1번)
	// 3. x 감소, y도 감소 (n-2번)
	// 4. 1번부터 반복

	let x = -1;
	let y = 0;

	let value = 1; // 네모에 저장할 값
	let directionIdx = 0; // 방향

	for (let i = n; i > 0; i--) {
		// n번, n-1번, n-2번 ...
		const [dx, dy] = directions[directionIdx];
		for (let j = 0; j < i; j++) {
			// 4번
			x += dx;
			y += dy;
			arr[x][y] = value;
			value++;
		}
		directionIdx = (directionIdx + 1) % 3;
	}

	console.log(arr);

	return arr.flat().filter(Boolean);
}
