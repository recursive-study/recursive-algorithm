function solution(weights) {
  let result = 0

  // 동일 무게를 가진 사람이 둘 이상이면 n명에서 두 명씩 뽑는 경우의 수만큼 짝꿍 수 증가 => (n*(n-1)) /2

  const countMap = new Map()

  weights.map((w) => {
    countMap.set(w, (countMap.get(w) || 0) + 1)
  })
  // { 100 => 2, 180 => 1, 270 => 1, 360 => 1 }

  for (let count of countMap.values()) {
    if (count >= 2) result += (count * (count - 1)) / 2
  }

  // 중복 제거
  weights = [...new Set(weights)]

  // 비율 2:3, 2:4, 3:4인 무게 찾기
  weights.forEach((w) => {
    const ratio = [2 / 3, 2 / 4, 3 / 4]
    ratio.forEach((r) => {
      if (weights.includes(w * r)) result += countMap.get(w * r) * countMap.get(w)
    })
  })

  return result
}

// 시간 초과

function solution(weights) {
  const result = new Set()
  weights.sort((a, b) => a - b)

  for (let i = 0; i < weights.length - 1; i++) {
    for (let j = i + 1; j < weights.length; j++) {
      if (weights[i] * 4 < weights[j] * 2) break
      for (let k = 2; k <= 4; k++) {
        for (let l = 2; l <= 4; l++) {
          if (weights[i] * k === weights[j] * l) {
            result.add(`${i},${j}`)
            break
          }
        }
      }
    }
  }

  return result.size
}
