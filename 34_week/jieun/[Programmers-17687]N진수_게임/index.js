function solution(n, t, m, p) {
	let result = '';
	for (let i = 0; result.length < m * t; i++) {
		let numStr = i.toString(n).toUpperCase();
		result += numStr;
	}

	return result
		.split('')
		.slice(p - 1)
		.reduce((acc, cur, i) => {
			return i % m === 0 && acc.length < t ? acc + cur : acc;
		}, '');
}
