function solution(k, d) {
	// 2, 4
	let answer = 0;

	for (let x = 0; x <= d; x += k) {
		let maxY = Math.sqrt(d * d - x * x); // 16 - 4 = √12 = 3.xx
		answer += Math.floor(maxY / k) + 1;
	}

	return answer;
}

// 시간 초과
// function solution(k, d) {
//     let answer = 0
//     // 최대 거리값 d를 넘지 않을 때까지 0부터 시작하여 k씩 더해주며 x를 증가시켜나간다.
//     for (let i = 0; i <= d; i += k) {
//         for (let j = 0; j <= d; j += k) {
//             // 좌표 i,j까지의 길이가 d보다 작거나 같다면 유효한 값
//             if (Math.sqrt(i*i + j*j) <= d) {
//                 answer++
//             }
//         }
//     }

//     return answer
// }
