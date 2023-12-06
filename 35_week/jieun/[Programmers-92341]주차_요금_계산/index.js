function solution(fees, records) {
	const [defaultTime, defaultFee, time, cost] = fees;
	const map = {};
	for (const record of records) {
		const [time, carNum, type] = record.split(' ');
		if (!map[carNum]) map[carNum] = [];
		map[carNum].push(time);
	}

	const feeEntries = Object.entries(map).map(([carNum, timeArr]) => {
		let totalTime = 0;
		if (timeArr.length % 2 === 1) timeArr.push('23:59');

		for (let i = 0; i < timeArr.length - 1; i += 2) {
			const inTime = timeArr[i];
			const outTime = timeArr[i + 1];
			const diffMinute = transformToMinutes(outTime) - transformToMinutes(inTime);
			totalTime += diffMinute;
		}

		totalTime -= defaultTime;
		const totalFee = totalTime <= 0 ? defaultFee : defaultFee + Math.ceil(totalTime / time) * cost;
		return [carNum, totalFee];
	});

	console.log(feeEntries);

	return feeEntries.sort((a, b) => a[0] - b[0]).map(([carNum, fee]) => fee);
}

function transformToMinutes(timeStr) {
	const [hour, minute] = timeStr.split(':');
	return Number(hour) * 60 + Number(minute);
}
