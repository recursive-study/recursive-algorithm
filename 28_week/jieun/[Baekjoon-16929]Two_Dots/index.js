const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [NM, ...board] = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = NM.split(' ').map(Number);
board = board.map((row) => row.split(''));

const check = Array.from({ length: N }, () => Array(M).fill(0));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
let flag = 0;

function dfs(x, y, count) {
	if (flag) return;

	for (let i = 0; i < 4; i++) {
		const [nx, ny] = [x + dx[i], y + dy[i]];

		if (nx <= -1 || ny <= -1 || nx >= N || ny >= M) continue;
		if (board[nx][ny] !== board[start.x][start.y]) continue;
		if (!check[nx][ny]) {
			check[nx][ny] = 1;
			dfs(nx, ny, count + 1);
			check[nx][ny] = 0;
			continue;
		}
		if (count >= 4 && nx === start.x && ny === start.y) {
			flag = 1;
			return;
		}
	}
}

let start;
for (let x = 0; x < N; x++) {
	for (let y = 0; y < M; y++) {
		start = { x, y };
		check[x][y] = 1;
		dfs(x, y, 1);
		check[x][y] = 0;
		if (flag) break;
	}
}

console.log(flag ? 'Yes' : 'No');
