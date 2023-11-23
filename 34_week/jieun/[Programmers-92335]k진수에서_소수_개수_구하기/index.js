function solution(n, k) {
	let count = 0;
	const arr = n.toString(k).split('0');

	for (const num of arr) {
		if (isPrimeNumber(Number(num))) count++;
	}
	return count;
}

function isPrimeNumber(num) {
	if (num <= 1) return false;
	if (num === 2) return true;
	if (num % 2 === 0) return false;
	for (let i = 3; i <= Math.sqrt(num); i += 2) {
		if (num % i === 0) return false;
	}
	return true;
}
