function solution(n, t, m, p) {
  let all = ''
  let answer = ''
  let cnt = 0

  for (let i = 0; all.length < m * t; i++) {
    // 인원수*구할 숫자
    all += i.toString(n).toUpperCase()
  }

  while (answer.length < t) {
    const str = all.substring(cnt, cnt + m) //(0,2) => 한 글자씩 자름
    console.log(str) //01
    answer += str[p - 1] //튜브의 순서에 해당하는 글자 추가 // str[0] //0

    cnt += m //2
  }

  return answer
}
