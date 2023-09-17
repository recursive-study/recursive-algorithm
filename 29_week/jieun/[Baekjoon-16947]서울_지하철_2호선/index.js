const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [N, ...edges] = fs.readFileSync(filePath).toString().trim().split('\n');

N = Number(N);
edges = edges.map((edge) => edge.split(' ').map(Number));

const graph = Array.from({ length: N + 1 }, () => new Array());

for (const [from, to] of edges) {
	graph[from].push(to);
	graph[to].push(from);
}

const visited = new Array(N + 1).fill(0);
let hasCycle = 0;
let cycle;

function dfs(currentNode, depth) {
	if (hasCycle) return;

	for (const node of graph[currentNode]) {
		if (!visited[node]) {
			visited[node] = 1;
			dfs(node, depth + 1);
			visited[node] = 0;
		} else if (depth >= 3 && node === start) {
			hasCycle = 1;
			cycle = visited.slice();
			return;
		}
	}
}

let start;
for (let i = 1; i <= N; i++) {
	start = i;
	visited[i] = 1;
	dfs(i, 1);
	visited[i] = 0;
	if (hasCycle) break;
}

function bfs(i) {
	const queue = [i];
	let distance = 0;
	const visited = Array(N + 1).fill(0);
	visited[i] = 1;

	while (true) {
		distance++;
		const L = queue.length;
		for (let i = 0; i < L; i++) {
			const from = queue.shift();
			for (const to of graph[from]) {
				if (cycle[to]) {
					return distance;
				}
				if (!visited[to]) {
					visited[to] = 1;
					queue.push(to);
				}
			}
		}
	}
}

const distanceArr = [];
for (let i = 1; i <= N; i++) {
	if (cycle[i]) {
		distanceArr.push(0);
		continue;
	}
	distanceArr.push(bfs(i));
}

console.log(distanceArr.join(' '));
