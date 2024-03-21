function solution(friends, gifts) {
  const len = friends.length
  const record = new Array(len).fill(0).map(() => new Array(len).fill(0))
  const giftScore = new Array(len).fill(0) // 선물 지수 = 준 선물 - 받을 선물
  const nextMonth = new Array(len).fill(0) // 다음 달에 받을 선물
  const friendsMap = new Map()

  friends.forEach((name, idx) => {
    friendsMap.set(name, idx)
  })

  // console.log(friendsMap)

  gifts.forEach((gift) => {
    const [giver, receiver] = gift.split(' ') //m f
    record[friendsMap.get(giver)][friendsMap.get(receiver)]++ //re[0][2]++
  })

  // console.log(record)

  // 선물지수 계산
  for (let i = 0; i < len; i++) {
    giftScore[i] = record[i].reduce((acc, cur) => (acc += cur), 0)

    // console.log('giveScore',giftScore) // [ 2, 3, 2, 1 ] // 준 횟수
    for (let j = 0; j < len; j++) {
      giftScore[i] -= record[j][i] // 받은 횟수 차감
    }
  }
  // console.log('giftScore',giftScore) // [ -3, 2, 0, 1 ] // 최종 선물지수

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      // i => j , j => i 비교
      //[ [ 0, 0, 2, 0 ], [ 3, 0, 0, 0 ], [ 1, 1, 0, 0 ], [ 1, 0, 0, 0 ] ]
      if (record[i][j] > record[j][i]) nextMonth[i]++
      if (record[i][j] < record[j][i]) nextMonth[j]++

      // 주고받은 수가 같은 경우
      if (record[i][j] === record[j][i]) {
        if (giftScore[i] > giftScore[j]) nextMonth[i]++
        if (giftScore[i] < giftScore[j]) nextMonth[j]++
      }
    }
  }

  // console.log(nextMonth)
  return Math.max(...nextMonth)
}
