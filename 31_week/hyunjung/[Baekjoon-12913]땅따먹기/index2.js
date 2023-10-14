// 풀이 참고
function solution(land) {
  let answer = 0

  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      if (i === 0) {
        continue
      } else {
        let arr = land[i - 1].slice()
        arr[j] = 0
        land[i][j] += Math.max.apply(null, arr) // arr 배열 내의 최솟값 찾기
        answer = Math.max(land[i][j], answer)
      }
    }
  }

  return answer
}
