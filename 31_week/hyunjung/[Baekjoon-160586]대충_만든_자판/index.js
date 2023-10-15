function solution(keymap, targets) {
  const answer = []

  const isHaveNumber = (num) => (num !== 0 ? 1 : 0)
  for (let i = 0; i < targets.length; i++) {
    let idxCount = 0

    for (const target of targets[i]) {
      let counts = keymap.map((key, idx) => {
        return keymap[idx].indexOf(target) + 1
      })

      if (counts.some(isHaveNumber)) {
        const filtered = counts.filter((count) => count !== 0)
        idxCount += Math.min(...filtered)
      } else {
        idxCount = -1
        break
      }
    }

    answer.push(idxCount)
  }
  return answer
}
