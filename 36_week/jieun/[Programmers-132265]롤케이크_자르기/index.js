function solution(toppings) {
	let count = 0;

	const allTopping = new Map();
	const bro = new Set();

	toppings.forEach((topping) => allTopping.set(topping, (allTopping.get(topping) || 0) + 1));

	console.log(allTopping);
	// { 1 => 4, 2 => 2, 3 => 1, 4 => 1 }

	toppings.forEach((topping) => {
		allTopping.set(topping, allTopping.get(topping) - 1); // 전체 토핑에서 하나 빼서
		bro.add(topping); // 형 토핑에 추가

		if (allTopping.get(topping) === 0) {
			allTopping.delete(topping);
		}
		console.log('allTopping', allTopping);
		console.log('bro', bro);

		if (allTopping.size === bro.size) count++;
	});

	return count;
}
