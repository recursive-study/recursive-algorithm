function solution(p) {
	var answer = '';

	// 1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다.
	if (!p) return '';

	const [i, isCorrectPair] = checkCorrectPair(p);

	// 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다.
	// 단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있습니다.
	let u = p.slice(0, i);
	let v = p.slice(i);

	// 3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다.
	if (isCorrectPair) {
		return u + solution(v);
		// 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다.
	} else {
		// 4-1. 빈 문자열에 첫 번째 문자로 '('를 붙입니다.
		// 4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다.
		// 4-3. ')'를 다시 붙입니다.
		answer = '(' + solution(v) + ')';
		// 4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다.
		for (let j = 1; j < u.length - 1; j++) {
			if (u[j] === '(') answer += ')';
			else answer += '(';
		}
	}
	// 4-5. 생성된 문자열을 반환합니다.
	return answer;
}

function checkCorrectPair(str) {
	let isCorrectPair = true;
	let open = 0;
	let close = 0;
	const stack = [];

	for (let i = 0; i < str.length; i++) {
		if (str[i] === '(') {
			open++;
			stack.push(str[i]);
		} else {
			close++;
			if (!stack.length) isCorrectPair = false;
			else stack.pop();
		}
		if (open === close) return [i + 1, isCorrectPair];
	}

	return [0, false];
}
