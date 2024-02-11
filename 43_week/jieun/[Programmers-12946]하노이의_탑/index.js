function solution(n) {
	var moves = [];
	const hanoi = (disc, from, to, other) => {
		// A, C, B
		if (disc === 0) return;

		// n번 원반을 A -> C로 옮기고 싶다면,
		// n - 1개 원반을 A -> B(other)로 옮긴 후
		hanoi(disc - 1, from, other, to);

		// 맨 아래 원반을 A -> C로 옮기고
		moves.push([from, to]);

		// n - 1개 원반을 B -> A로 되돌린다.
		hanoi(disc - 1, other, to, from);
	};

	hanoi(n, 1, 3, 2);

	return moves;
}
