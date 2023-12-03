function solution(new_id) {
	let str = new_id
		.toLowerCase()
		.replace(/[^a-z0-9\-_\.]/g, '') // 영소문자, 숫자, -_. 제외한 특수문자 모두 제거
		.replace(/\.+/g, '.') // .이 1개 이상이면 1개로 대체
		.replace(/^\.|\.$/, ''); // . 이 맨 앞 또는 끝에 있다면 제거

	if (str === '') str = 'a';
	if (str.length > 15) str = str.slice(0, 15);
	str = str.replace(/\.+$/, '').replace(/^\.|\.$/, '');
	if (str.length < 3) str = str + str[str.length - 1].repeat(3 - str.length);
	return str;
}
