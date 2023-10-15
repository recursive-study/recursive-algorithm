function solution(keymap, targets) {
	const hash = {};
	keymap.forEach((keys) => {
		[...keys].forEach((key, i) => {
			hash[key] ? (hash[key] = Math.min(hash[key], i + 1)) : (hash[key] = i + 1);
		});
	});

	const answer = [];

	for (const target of targets) {
		let count = 0;

		for (const key of target) {
			count += hash[key];
		}
		answer.push(count || -1);
	}
	return answer;
}
