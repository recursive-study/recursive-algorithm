const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [N, K] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);
const visited = {};

function bfs(N, K) {
	const queue = [];
	queue.push([N, 0, `${N}`]);
	visited[N] = true;

	while (queue.length) {
		const [curLoc, time, path] = queue.shift();

		if (curLoc === K) return [time, path].join('\n');

		for (const next of [curLoc - 1, curLoc + 1, curLoc * 2]) {
			if (!visited[next] && next >= 0 && next <= 100000) {
				visited[next] = true;
				queue.push([next, time + 1, `${path} ${next}`]);
			}
		}
	}
}

const answer = bfs(N, K);
console.log(answer);
