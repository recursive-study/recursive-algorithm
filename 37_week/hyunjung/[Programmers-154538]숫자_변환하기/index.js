// 런타임 에러

function solution(x, y, n) {
  let count = 0
  let answer = -1

  const dfs = (x, count) => {
    if (x === y) {
      if (answer === -1) {
        answer = count
      } else {
        if (answer > count) answer = count
      }
      return
    } else if (x > y) {
      return
    } else {
      dfs(x * 2, count + 1)
      dfs(x * 3, count + 1)
      dfs(x + n, count + 1)
    }
  }

  dfs(x, count)

  return answer
}

//통과
function solution(x, y, n) {
  const arr = Array.from({length: y + 1}, () => Infinity)

  arr[x] = 0

  for (let i = x; i <= y; i++) {
    if (i - n >= x) arr[i] = Math.min(arr[i], arr[i - n] + 1)
    if (i % 2 === 0 && i / 2 >= x) arr[i] = Math.min(arr[i], arr[i / 2] + 1)
    if (i % 3 === 0 && i / 3 >= x) arr[i] = Math.min(arr[i], arr[i / 3] + 1)
  }
  return arr[y] === Infinity ? -1 : arr[y]
}
