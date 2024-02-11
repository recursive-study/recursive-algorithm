function solution(n, k) {
	const answer = [];

	const arr = Array.from({ length: n }, (_, i) => i + 1); // [1, 2, 3]
	k -= 1;

	while (true) {
		n -= 1; // n - 1을 기준으로 앞자리가 바뀜 // n = 2

		if (k === 0) {
			answer.push(...arr);
			break;
		}

		const index = Math.floor(k / factorial(n)); // index = 4 / 2! = 2
		k = k % factorial(n); // k = 4 % 2! = 0
		answer.push(arr[index]); // answer.push(arr[2]) -> answer = [3]
		arr.splice(index, 1); // arr = [1, 2]
	}

	// k / (n - 1)! 로 현재값의 index를 얻고
	// k % (n - 1)! 로 다음값의 index를 얻을 수 있다.
	// 만약 k % (n - 1)! === 0 이라면 arr의 남은 배열을 그대로 추가해주면 됨

	return answer;
}

// arr = [1, 2, 3, 4] -> 5
// 첫번째 자리 5 / 3! =

function factorial(num) {
	if (num === 0) return 1;
	return num * factorial(num - 1);
}

console.log(solution(4, 5));
