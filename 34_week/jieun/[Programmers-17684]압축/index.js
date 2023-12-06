function solution(msg) {
	const dict = {};
	const startCharCode = 'A'.charCodeAt(); // 65

	for (let i = 0; i < 26; i++) {
		const alphabet = String.fromCharCode(startCharCode + i);
		dict[alphabet] = i + 1;
	}

	const result = [];

	while (msg.length) {
		let w = '';
		for (let i = 1; i <= msg.length; i++) {
			const c = msg.substring(0, i);
			console.log('c', c);
			if (!dict[c]) {
				dict[c] = Object.keys(dict).length + 1;
				break;
			}
			w = c;
		}
		result.push(dict[w]);
		msg = msg.substr(w.length);
	}

	return result;
}
