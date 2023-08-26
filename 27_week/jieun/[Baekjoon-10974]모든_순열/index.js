const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const N = Number(fs.readFileSync(filePath).toString().trim());

function getAllArr(N) {
	let result = [];
	const visited = new Array(N + 1).fill(false);

	const dfs = (arr) => {
		if (arr.length === N) {
			result.push([...arr]);
			return;
		}

		for (let i = 1; i <= N; i++) {
			if (!visited[i]) {
				arr.push(i);
				visited[i] = true;
				dfs(arr);
				arr.pop();
				visited[i] = false;
			}
		}
	};

	dfs([]);

	return result.map((arr) => arr.join(' ')).join('\n');
}

console.log(getAllArr(N));
