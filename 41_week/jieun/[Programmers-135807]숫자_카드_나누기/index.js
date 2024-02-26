function solution(arrayA, arrayB) {
	const answer = [];

	const gcdOfArrayA = arrayA.reduce((acc, cur) => gcd(acc, cur)); // 1
	const gcdOfArrayB = arrayB.reduce((acc, cur) => gcd(acc, cur)); // 5

	if (arrayA.every((v) => v % gcdOfArrayB !== 0)) answer.push(gcdOfArrayB);
	if (arrayB.every((v) => v % gcdOfArrayA !== 0)) answer.push(gcdOfArrayA);

	return answer.length ? Math.max(...answer) : 0;
}

function gcd(a, b) {
	let remainder = a % b;
	if (remainder === 0) return b;
	else return gcd(b, remainder);
}
