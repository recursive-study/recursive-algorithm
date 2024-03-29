function solution(storey) {
  const s = Array.from(String(storey), (num) => Number(num))

  let count = 0

  while (s.length) {
    let last = s.pop()

    if (last === 5) {
      count += last
      if (s.length && s.at(-1) >= 5) {
        s.push(s.pop() + 1)
      }
    } else if (last < 5) {
      count += last
    } else {
      count += 10 - last
      if (s.length) {
        s.push(s.pop() + 1)
      } else {
        count += 1
      }
    }
  }

  return count
}
