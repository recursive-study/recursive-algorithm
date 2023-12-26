function solution(order) {
  const sub = []
  let idx = 0
  let truck = 0

  // 필요한 상자랑 컨테이너 앞쪽 상자 비교
  // 같으면 필요한 상자++, 트럭에 실은 상자++
  // 다르면 보조 컨테이너로 올리기

  for (let i = 1; i <= order.length; i++) {
    if (order[idx] !== i) {
      sub.push(i)
    } else {
      idx++
      truck++
    }

    // 보조 컨테이너에 상자가 있고, 마지막 상자와 필요한 상자 비교
    // 같으면 1. 보조상자에서 제거, 2. 필요한 상자++, 3. 트럭 상자++

    while (sub.length !== 0 && sub.at(-1) === order[idx]) {
      sub.pop()
      idx++
      truck++
    }
  }

  return truck
}
