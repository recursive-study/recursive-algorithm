function solution(str1, str2) {
	const arr1 = makeSet(str1);
	const arr2 = makeSet(str2);
	console.log(arr1, arr2);

	let intersection = 0;
	let union;

	for (const word of arr1) {
		const index = arr2.indexOf(word);
		if (index !== -1) {
			intersection++;
			arr2[index] = null;
		}
	}

	union = arr1.length + arr2.length - intersection;

	let result = intersection / union;
	if (intersection === 0 && union === 0) result = 1;

	return Math.floor(result * 65536);
}

function makeSet(str) {
	// FRANCE
	const arr = str.split('').reduce((acc, cur, i) => {
		if (i === 0) return acc;
		const word = str[i - 1].concat(cur).toLowerCase(); // 'fr'
		if (/^[a-z]+$/.test(word)) return [...acc, word];
		return acc;
	}, []);
	return arr;
}
