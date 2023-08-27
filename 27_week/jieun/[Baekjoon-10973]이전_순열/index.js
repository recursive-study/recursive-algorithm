const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...currentArr] = fs.readFileSync(filePath).toString().trim().split(/\s+/).map(Number);

function findPreviousArr(N, arr) {
	const sortedArr = [...arr].sort((a, b) => a - b);
	if (arr.every((v, i) => v === sortedArr[i])) {
		return -1;
	} else {
		let i = N - 2;
		while (arr[i] < arr[i + 1]) {
			i--;
		}

		let j = N - 1;
		while (arr[i] < arr[j]) {
			j--;
		}

		[arr[i], arr[j]] = [arr[j], arr[i]];

		const front = arr.slice(0, i + 1);
		const back = arr.slice(i + 1).sort((a, b) => b - a);

		return [...front, ...back].join(' ');
	}
}

const nextArr = findPreviousArr(N, currentArr);

console.log(nextArr);
