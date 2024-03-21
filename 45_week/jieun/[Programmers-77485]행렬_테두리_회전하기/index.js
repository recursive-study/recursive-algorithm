function solution(rows, columns, queries) {
	const result = [];
	const matrix = Array.from({ length: rows }, (_, i) => Array.from({ length: columns }, (_, j) => columns * i + (j + 1)));
	console.log('matrix', matrix);

	queries.forEach((query) => {
		const rotatedValues = [];
		const [row1, col1, row2, col2] = query.map((a) => a - 1); // index에 맞추기 위해 -1
		let temp = matrix[row1][col1]; // 시작점 저장

		// 왼쪽 column 위로 한 칸씩 이동
		for (let i = row1; i < row2; i++) {
			matrix[i][col1] = matrix[i + 1][col1];
			rotatedValues.push(matrix[i][col1]);
		}
		// 아래 row 왼쪽으로 한 칸씩 이동
		for (let i = col1; i < col2; i++) {
			matrix[row2][i] = matrix[row2][i + 1];
			rotatedValues.push(matrix[row2][i]);
		}
		// 오른쪽 column 아래로 한 칸씩 이동
		for (let i = row2; i > row1; i--) {
			matrix[i][col2] = matrix[i - 1][col2];
			rotatedValues.push(matrix[i][col2]);
		}
		// 위 row 오른쪽으로 한 칸씩 이동
		for (let i = col2; i > col1 + 1; i--) {
			matrix[row1][i] = matrix[row1][i - 1];
			rotatedValues.push(matrix[row1][i]);
		}
		matrix[row1][col1 + 1] = temp;
		rotatedValues.push(temp);
		console.log('rotatedValues', rotatedValues);
		result.push(Math.min(...rotatedValues));
	});
	return result;
}
