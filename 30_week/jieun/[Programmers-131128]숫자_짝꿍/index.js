function solution(X, Y) {
	let result = '';

	for (let i = 9; i >= 0; i--) {
		const sameNumCountX = X.split('').filter((v) => +v === i).length;
		const sameNumCountY = Y.split('').filter((v) => +v === i).length;
		const count = Math.min(sameNumCountX, sameNumCountY);
		result += `${i}`.repeat(count);
	}

	if (result === '') result = '-1';
	if (result[0] === '0') result = '0';

	return result;
}
