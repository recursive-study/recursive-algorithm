function solution(expression) {
	const expressions = ['+-*', '+*-', '-*+', '-+*', '*+-', '*-+'];
	let max = 0;

	let tokens = expression.match(/(\d+|[-+*/])/g);
	// ['100', '-','200', '*', '300', '-', '500', '+', '20']

	expressions.forEach((ex, i) => {
		// '+-*'
		let tokens_c = [...tokens]; // ['100', '-','200', '*', '300', '-', '500', '+', '20']
		console.log('ex', ex, 'i', i);
		ex.split('').forEach((e) => {
			// e = '+'
			for (let i = 0; i < tokens_c.length; i++) {
				if (e === tokens_c[i]) {
					// tokens_c[i] = '+'
					let temp;
					if (e === '+') {
						temp = +tokens_c[i - 1] + +tokens_c[i + 1];
					} else if (e === '*') {
						temp = +tokens_c[i - 1] * +tokens_c[i + 1];
					} else {
						temp = +tokens_c[i - 1] - +tokens_c[i + 1];
					}
					tokens_c.splice(i - 1, 3, temp.toString());
					i--;
				}
			}
		});
		max = Math.max(max, Math.abs(Number(tokens_c[0])));
	});

	return max;
}
