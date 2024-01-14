function solution(n) {
	const answer = [];
	while (n) {
		let rest = n % 3;
		if (rest === 0) {
			// 3의 배수인 경우, n에서 1을 뺀 것을 앞에, 4를 뒤에 붙임
			rest = 4;
			n -= 1;
		}
		answer.push(rest);
		n = Math.floor(n / 3);
	}
	return answer.reverse().join('');
}
