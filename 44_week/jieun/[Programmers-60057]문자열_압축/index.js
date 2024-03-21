function solution(s) {
	const result = [];

	for (let i = 1; i <= s.length; i++) {
		// i자씩 끊기
		let str = '';
		let count = 1; // 연속 개수 체크
		let prev = s.slice(0, i); // 첫 번째 요소 준비

		for (let j = i; j <= s.length + i; j += i) {
			// "aabbaccc"
			const cur = s.slice(j, j + i);
			console.log('j', j, 'cur', cur);
			// 연속일 때(이전 값과 같음)
			if (prev === cur) {
				count++; // 숫자 증가
				// 연속 깨질 때
			} else {
				if (count === 1) {
					// 그대로 붙이기
					str += prev;
				} else {
					str += `${count}${prev}`; // 연속 숫자와 붙이기
				}
				prev = cur; // 값 업데이트
				count = 1; // 카운트 초기화
			}
		}
		console.log(str);
		result.push(str.length);
	}
	return Math.min(...result);
}
