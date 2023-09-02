const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [N, ...edges] = fs.readFileSync(filePath).toString().trim().split('\n');

N = Number(N);
edges = edges.map((connection) => connection.split(' ').map(Number));

const tree = Array.from({ length: N + 1 }, () => new Array());

for (const [a, b] of edges) {
	tree[a].push(b);
	tree[b].push(a);
}

const parent = Array(N + 1).fill(0);

const bfs = () => {
	const queue = [1];
	parent[1] = 1;

	while (queue.length) {
		const currentNode = queue.shift();

		for (const node of tree[currentNode]) {
			if (parent[node]) continue;
			parent[node] = currentNode;
			queue.push(node);
		}
	}
};

bfs();

console.log(parent.slice(2).join('\n'));
