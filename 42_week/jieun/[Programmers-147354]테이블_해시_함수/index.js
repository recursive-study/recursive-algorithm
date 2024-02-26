function solution(data, col, row_begin, row_end) {
	// 튜플을 col번째 컬럼의 값으로 오름차순 정렬
	// 동일하면 기본키인 첫 번째 컬럼의 값으로 내림차순 정렬
	const sortedData = data.sort((a, b) => {
		return a[col - 1] === b[col - 1] ? b[0] - a[0] : a[col - 1] - b[col - 1];
	});

	let bitwiseXOR;
	for (let i = row_begin - 1; i <= row_end - 1; i++) {
		let sum = 0; // 특정 행의 XOR 값을 저장할 변수 추가
		for (let j = 0; j < sortedData[i].length; j++) {
			sum += sortedData[i][j] % (i + 1);
		}

		if (bitwiseXOR === undefined) bitwiseXOR = sum;
		else bitwiseXOR ^= sum;
	}
	return bitwiseXOR;
}
