const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [N, ...subTrees] = fs.readFileSync(filePath).toString().trim().split('\n');

subTrees = subTrees.map((v) => v.split(' '));

const tree = {};
let result = '';

for (const [node, left, right] of subTrees) {
	tree[node] = [left, right];
}

function preOrder(node) {
	if (node === '.') return;
	const [left, right] = tree[node];
	result += node;
	preOrder(left);
	preOrder(right);
}

function inOrder(node) {
	if (node === '.') return;
	const [left, right] = tree[node];
	inOrder(left);
	result += node;
	inOrder(right);
}

function postOrder(node) {
	if (node === '.') return;
	const [left, right] = tree[node];
	postOrder(left);
	postOrder(right);
	result += node;
}

preOrder('A');
result += '\n';
inOrder('A');
result += '\n';
postOrder('A');

console.log(result);
