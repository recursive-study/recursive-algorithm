function solution(wallpaper) {
	const rowLen = wallpaper.length,
		colLen = wallpaper[0].length;
	const matrix = Array.from(wallpaper, (row) => Array.from(row, (char) => (char === '.' ? 0 : 1)));

	let left = colLen - 1,
		up = rowLen - 1,
		right = 0,
		down = 0;
	for (let row = 0; row < rowLen; row++) {
		for (col = 0; col < colLen; col++) {
			const value = matrix[row][col];
			if (value) {
				up = Math.min(up, row);
				left = Math.min(left, col);
				down = Math.max(down, row + 1);
				right = Math.max(right, col + 1);
			}
		}
	}
	return [up, left, down, right];
}
