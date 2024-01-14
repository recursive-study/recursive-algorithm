function solution(maps) {
	const result = [];
	maps = maps.map((str) => str.split(''));

	const dfs = (dx, dy) => {
		if (!maps[dx] || !maps[dx][dy] || maps[dx][dy] === 'X') return 0;

		const current = Number(maps[dx][dy]);
		maps[dx][dy] = 'X';
		return current + dfs(dx - 1, dy) + dfs(dx + 1, dy) + dfs(dx, dy - 1) + dfs(dx, dy + 1);
	};

	for (let x = 0; x < maps.length; x++) {
		for (let y = 0; y < maps[0].length; y++) {
			if (maps[x][y] !== 'X') result.push(dfs(x, y));
		}
	}

	return result.length ? result.sort((a, b) => a - b) : [-1];
}
