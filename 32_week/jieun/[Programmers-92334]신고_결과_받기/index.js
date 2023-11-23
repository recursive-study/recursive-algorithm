function solution(id_list, report, k) {
	const mailCount = {};
	const reportList = {};

	id_list.forEach((userId) => {
		mailCount[userId] = 0;
		reportList[userId] = [];
	});

	report.forEach((string) => {
		const [userId, reportedId] = string.split(' ');
		if (!reportList[reportedId].includes(userId)) {
			reportList[reportedId].push(userId);
		}
	});

	for (const reportedId in reportList) {
		const reportedCount = reportList[reportedId].length;
		if (k <= reportedCount) {
			reportList[reportedId].forEach((userId) => {
				mailCount[userId]++;
			});
		}
	}

	return Object.values(mailCount);
}
