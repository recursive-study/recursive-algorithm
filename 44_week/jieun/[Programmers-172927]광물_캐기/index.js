function solution(picks, minerals) {
	// 주어진 곡괭이 수로 캘 수 있는 최대 광물 수보다 광물 수가 많다면, 광물 배열을 자른다.
	const totalPicks = picks.reduce((acc, v) => acc + v, 0); // 6

	if (totalPicks * 5 < minerals.length) {
		minerals = minerals.slice(0, totalPicks * 5);
	}

	// 다섯 광물씩 묶기
	let fiveMinerals = [];
	for (let i = 0; i < minerals.length; i += 5) {
		fiveMinerals.push(minerals.slice(i, i + 5));
	}
	// [
	// [ 'diamond', 'diamond', 'diamond', 'iron', 'iron' ],
	// [ 'diamond', 'iron', 'stone' ]
	// ]

	fiveMinerals = fiveMinerals.map((minerals) => {
		// minerals = [ 'diamond', 'diamond', 'diamond', 'iron', 'iron' ]
		return minerals.reduce(
			(acc, v) => {
				// v = 'diamond'
				if (v === 'diamond') acc[0]++;
				else if (v === 'iron') acc[1]++;
				else acc[2]++;
				return acc;
			},
			[0, 0, 0]
		);
	});
	// 	[ [ 3, 2, 0 ], [ 1, 1, 1 ] ]

	// 비용이 많이 드는 광물이 많은 순으로 정렬
	const sortedFiveMinerals = fiveMinerals.sort((a, b) => {
		if (a[0] !== b[0]) return b[0] - a[0]; // 다이아몬드 수로 정렬
		return b[1] - a[1]; // 다이아몬드 수가 같으면 철 수로 정렬
	});

	let tiredness = 0;
	// 정렬된 순서대로 다이아 곡괭이 -> 철 곡괭이 -> 돌 곡괭이를 사용해서 캔다.
	sortedFiveMinerals.forEach((minerals) => {
		// minerals = [3, 2, 0]
		for (let pickIdx = 0; pickIdx < picks.length; pickIdx++) {
			// 다이아 : 0, 철 : 1, 돌 : 2
			const pick = picks[pickIdx]; // 곡괭이 개수
			if (pick === 0) continue; // 곡괭이 0개면 스킵

			for (let mineralIdx = 0; mineralIdx < minerals.length; mineralIdx++) {
				// 다이아 : 0, 철 : 1, 돌 : 2
				const mineral = minerals[mineralIdx]; // 광물 개수 3
				// pickIdx = 0 (다이아), mineralIdx = 0 (다이아)
				// 곡괭이 레벨이 광물 레벨보다 높으면(숫자가 더 작으면), 피로도는 1만큼 더해진다.
				if (pickIdx <= mineralIdx) tiredness += 1 * mineral;
				// 그 외의 경우, 피로도는 5^레벨 차이만큼 더해진다.
				else tiredness += Math.pow(5, pickIdx - mineralIdx) * mineral;
			}
			picks[pickIdx]--;
			break;
		}
	});
	return tiredness;
}
