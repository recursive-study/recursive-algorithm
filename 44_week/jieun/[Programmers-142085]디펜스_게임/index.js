function solution(n, k, enemy) {
	let left = 0;
	let right = enemy.length; // 7 -> slice 사용해야하므로
	let mid = Math.floor((left + right) / 2); // 3

	// 5라운드가 정답인지 확인
	while (left <= right) {
		// left와 right가 같아질 때까지
		// 무적권은 적의 수가 많을 때 쓰는게 이득이므로 내림차순 정렬
		const curSlice = enemy.slice(0, mid).sort((a, b) => b - a);
		// [4, 2, 4, 5, 3, 3] -> [5, 4, 4, 3, 3, 2]
		let noDie = k; // 0

		// 무적권 사용하고 남을 상대 병사의 수
		const leftEnemy = curSlice.reduce((acc, cur) => {
			// 무적권이 있다면 사용
			if (noDie) {
				noDie--;
				return acc;
			}
			return acc + cur;
		}, 0); // 8 <= 7

		// 만약 내 병사 수가 상대 병사 수보다 더 많거나 무적권이 남아있다면
		if (leftEnemy <= n || noDie) {
			left = mid + 1; // 더 많은 라운드가 정답 -> 6
		} else {
			right = mid - 1; // 더 적은 라운드가 정답 5
		}
		mid = Math.floor((left + right) / 2); // 5
	}
}
return left - 1; // 6 - 1 = 5
