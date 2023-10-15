//테케만 통과
function solution(land) {
  let preIdx
  let sum = 0

  const getMax = (arr, preIdx) => {
    let max = 0
    let nextIdx
    for (let i = 0; i < arr.length; i++) {
      if (i !== preIdx && arr[i] > max && arr[i] + sum <= 100) {
        max = arr[i]
        nextIdx = i
      }
    }
    // console.log(max)
    return [max, nextIdx]
  }

  land.forEach((line) => {
    let [max, nextIdx] = getMax(line, preIdx, sum)
    sum += max
    preIdx = nextIdx
  })

  return sum
}
