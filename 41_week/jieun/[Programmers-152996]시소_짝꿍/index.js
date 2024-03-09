function solution(weights) {
	var answer = 0;
	const cal = [2 / 1, 1 / 1, 3 / 2, 4 / 3]; // 경우의 수
	const memo = {};

	weights
		.sort((a, b) => b - a)
		.forEach((weight) => {
			console.log('weight', weight);
			for (let i of cal) {
				const now = weight * i;
				console.log(now);
				if (memo[now]) answer += memo[now];
			}

			if (memo[weight]) memo[weight]++;
			else memo[weight] = 1;
		});
	return answer;
}
