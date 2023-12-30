function solution(dirs) {
	const move = { U: [0, 1], D: [0, -1], R: [1, 0], L: [-1, 0] };
	let curX = 0;
	let curY = 0;
	const moveList = [];

	for (const dir of dirs) {
		// U
		const [dx, dy] = move[dir]; // [0, 1]
		const x = curX + dx;
		const y = curY + dy;

		if (x < -5 || x > 5 || y < -5 || y > 5) continue;

		moveList.push(`${curX},${curY} & ${x},${y}`);
		moveList.push(`${x},${y} & ${curX},${curY}`);

		curX = x;
		curY = y;
	}

	return new Set(moveList).size / 2;
}
