function solution(numbers) {
	const answer = Array(numbers.length).fill(-1);
	const stack = [];

	for (let i = 0; i < numbers.length; i++) {
		while (stack.length && stack.at(-1)[0] < numbers[i]) {
			answer[stack.pop()[1]] = numbers[i];
		}
		stack.push([numbers[i], i]);
	}
	return answer;
}
