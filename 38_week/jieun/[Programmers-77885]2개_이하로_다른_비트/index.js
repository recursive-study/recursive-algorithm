function solution(numbers) {
	return numbers.map((number) => {
		if (number % 2 === 0) {
			return number + 1;
		} else {
			const binaryNumber = '0' + number.toString(2);
			const idx = binaryNumber.lastIndexOf('01');
			return parseInt(binaryNumber.substring(0, idx) + '10' + binaryNumber.substring(idx + 2), 2);
		}
	});
}
