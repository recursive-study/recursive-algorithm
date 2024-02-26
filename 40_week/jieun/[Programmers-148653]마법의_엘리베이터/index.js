function solution(storey) {
	const s = Array.from(String(storey), (num) => Number(num));

	let count = 0;

	while (s.length) {
		let last = s.pop(); // 6

		// 5인 경우 올림을 해주면 count가 1 더해지기 때문에 내림
		// 5 이하인 경우 내림
		if (last === 5) {
			count += last;
			if (s.length) {
				// 다음 자리가 있을 때
				// 다음 자리가 5보다 클 때
				if (s[-1] >= 5) {
					s.push(s.pop() + 1); // 다음 자리에 + 1 (올림)
				} else {
					// 다음 자리가 5보다 작을 때
					// 내림
				}
			}
		} else if (last < 5) {
			//15 // 10 //20
			count += last;
		} else {
			// 올림
			count += 10 - last; //4
			// 앞자리 올림
			if (s.length) {
				s.push(s.pop() + 1); // 1+1 = 2 // [0]
			} else {
				count += 1; // 0인 경우
			}
		}
	}

	return count;
}
