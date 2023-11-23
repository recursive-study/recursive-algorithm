function solution(dartResult) {
	// 1S2D*3T
	const regex = /(\d+[SDT][*#]?)/g; // 숫자 + 영문자(SDT) + 옵션(*#)
	const result = dartResult.match(regex); // 정규식과 일치하는 문자열을 배열로 반환
	// result : [ '1S', '2D*', '3T' ]
	const scores = [];

	result.forEach((str) => {
		const [score] = str.match(/\d+/);
		const [bonus] = str.match(/[SDT]/);
		const [option] = str.match(/[*#]/) || [];
		console.log(score, bonus, option);
		// 1 S undefined
		// 2 D *
		// 3 T undefined

		let cal;
		if (bonus === 'S') {
			cal = Math.pow(score, 1);
		} else if (bonus === 'D') {
			cal = Math.pow(score, 2);
		} else if (bonus === 'T') cal = Math.pow(score, 3);

		scores.push(cal);

		if (option === '#') {
			scores[scores.length - 1] = -cal;
		} else if (option === '*') {
			scores[scores.length - 1] = cal * 2;
			scores[scores.length - 2] = scores[scores.length - 2] * 2;
		}
	});

	return scores.reduce((acc, cur) => acc + cur, 0);
}
