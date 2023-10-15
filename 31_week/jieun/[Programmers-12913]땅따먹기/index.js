function solution(land) {
	for (let i = 1; i < land.length; i++) {
		for (let j = 0; j < 4; j++) {
			const prevLand = land[i - 1].filter((_, _i) => j !== _i);
			land[i][j] += Math.max(...prevLand);
		}
	}
	console.log(land);
	return Math.max(...land.pop());
}
