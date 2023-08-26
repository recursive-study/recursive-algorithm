const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...numbers] = fs.readFileSync(filePath).toString().trim().split(/\s+/).map(Number);

function getAllPermutations(N, numbers) {
	const result = [];
	const visited = {};

	const dfs = (arr) => {
		if (arr.length === N) {
			result.push([...arr]);
			return;
		}

		for (let i = 0; i < numbers.length; i++) {
			if (!visited[i]) {
				arr.push(numbers[i]);
				visited[i] = true;
				dfs(arr);
				arr.pop();
				visited[i] = false;
			}
		}
	};

	dfs([]);

	return result;
}

function getSumOfDifference(arr) {
	return arr.reduce((sum, number, i, arr) => (i !== arr.length - 1 ? sum + Math.abs(number - arr[i + 1]) : sum), 0);
}

const permutations = getAllPermutations(N, numbers);
const sumOfPermutations = permutations.map((arr) => getSumOfDifference(arr));

console.log(Math.max(...sumOfPermutations));
