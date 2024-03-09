function solution(picks, minerals) {
  let fatigue = 0 // 피로도
  const set = []
  let setWeight = [] // 가중치

  for (let i = 0; i < minerals.length; i += 5) {
    set.push(minerals.slice(i, i + 5))
  }
  console.log(set)
  set.forEach((s) => {
    let dia = 0,
      iron = 0,
      stone = 0
    s.forEach((mineral) => {
      if (mineral === 'diamond') {
        dia += 1
        iron += 5
        stone += 25
      } else if (mineral === 'iron') {
        dia += 1
        iron += 1
        stone += 5
      } else {
        dia += 1
        iron += 1
        stone += 1
      }
    })
    setWeight.push([dia, iron, stone])
  })
  let count = picks.reduce((acc, cur) => acc + cur, 0) // 6
  // 스톤 가중치 기준으로 내림차순 정렬
  setWeight = setWeight.slice(0, count).sort((a, b) => b[2] - a[2])

  // 가중치가 높은 세트부터 다이아 -> 아이언 -> 스톤 순서로 캐기

  setWeight.forEach(([d, i, s]) => {
    console.log([d, i, s])
    if (picks[0] > 0) {
      fatigue += d // 5
      picks[0]--
    } else if (picks[1] > 0) {
      fatigue += i
      picks[1]--
    } else if (picks[2] > 0) {
      fatigue += s
      picks[2]--
    }
    if (count === 0) return fatigue
    count--
  })

  return fatigue
}
