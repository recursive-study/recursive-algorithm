// 시간 초과
function solution(topping) {
  let toppingSet = [...new Set(topping)]
  let count = 0

  for (let i = 1; i < topping.length; i++) {
    let left = new Set(topping.slice(0, i)).size
    let right = new Set(topping.slice(i)).size
    if (left === right) {
      count++
      if (count === toppingSet.size) {
        return count
      }
    }
  }
  return count
}

// 통과
function solution(topping) {
  const toppingMap = new Map()

  topping.forEach((t) => {
    if (toppingMap.has(t)) {
      const value = toppingMap.get(t)
      value.count++
      toppingMap.set(t, value)
    } else {
      toppingMap.set(t, {count: 1, visited: false})
    }
  })

  let result = 0
  let [철수, 동생] = [0, toppingMap.size]
  for (let i = 0; i < topping.length; i++) {
    const value = toppingMap.get(topping[i])

    if (value.count >= 1) {
      value.count--
      if (value.count === 0) 동생--
    }

    if (!value.visited) {
      value.visited = true
      철수++
    }

    if (철수 === 동생) result++
  }
  return result
}
