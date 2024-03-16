function solution(s) {
  let shortest = s.length

  for (let i = 1; i < s.length; i++) {
    // 자르는 단위 //'a' 'a' // 'aa'
    const arr = []
    for (let j = 0; j < s.length; j += i) {
      // 문자열 인덱스
      arr.push(s.slice(j, j + i)) // i=2,j=0 (0,2) 'aa' // j=2 (2,4) 'bb'
    }

    // console.log(arr)

    const str = arr.reduce(
      (acc, cur, idx) => {
        const [s, cnt, temp] = acc // 현재까지 압축된 문자열, 반복횟수,이전부분 문자열 'a'

        if (cur === temp) {
          // 현재 === 이전 문자열 => 반복 횟수증가
          if (idx === arr.length - 1) return [s + String(cnt + 1), 1, cur] // 마지막인 경우 리턴 //a2
          return [s, cnt + 1, temp] //반복횟수 추가
        } else {
          //다른 경우 temp를 cur로 바꿔줌
          if (cnt < 2) return [s + cur, 1, cur] // (1은 숫자 생략)
          else return [s + String(cnt) + cur, 1, cur] // 현재부분문자열+반복횟수 추가
        }
      },
      ['', 0, 0]
    )

    // console.log('str',str)
    shortest = Math.min(shortest, str[0].length)
  }

  return shortest
}
