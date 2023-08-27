const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const costs = [];

for (let i = 1; i <= N; i++) {
	const cost = input[i].split(' ').map(Number);
	costs.push(cost);
}

function getMinCost(costs) {
	let minCost = Infinity;
	const visited = new Array(N).fill(false);

	const dfs = (from, cost, depth) => {
		if (depth === N - 1 && costs[from][0]) {
			const finalCost = cost + costs[from][0]; // 마지막 도시에서 처음 도시로 돌아오는 비용 추가
			minCost = Math.min(minCost, finalCost);
			return;
		}

		for (let to = 0; to < N; to++) {
			if (!visited[to] && costs[from][to]) {
				visited[to] = true;
				dfs(to, cost + costs[from][to], depth + 1);
				visited[to] = false;
			}
		}
	};

	visited[0] = true;
	dfs(0, 0, 0);

	return minCost;
}

console.log(getMinCost(costs));
