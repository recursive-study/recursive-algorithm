function solution(sequence, k) {
	const answer = [];
	let left = 0;
	let right = 0;
	let sum = sequence[0];

	while (right < sequence.length) {
		if (sum < k) {
			right++;
			sum += sequence[right];
		} else if (sum > k) {
			sum -= sequence[left];
			left++;
		} else {
			answer.push([left, right]);
			right++;
			sum += sequence[right];
		}
	}

	const sorted = answer.sort((a, b) => {
		const lengthDiff = a[1] - a[0] - (b[1] - b[0]);
		if (lengthDiff !== 0) return lengthDiff;
		else a[0] - b[0];
	});

	return sorted[0];
}
