function solution(fees, records) {
  const carList = {}
  const [basicTime, basicFee, overTime, overFee] = fees

  records.forEach((record) => {
    let [time, carNumber, inOut] = record.split(' ')
    let [h, m] = time.split(':')

    time = h * 60 + Number(m) // 분 단위로 환산

    // 처음 입차
    if (!carList[carNumber]) {
      carList[carNumber] = {time: 0, carNumber}
    }

    carList[carNumber].inOut = inOut

    // 출차 시
    if (inOut === 'OUT') {
      carList[carNumber].time += time - carList[carNumber].lastInTime // 주차 시간 구하기
      return
    }

    carList[carNumber].lastInTime = time
  })

  return Object.values(carList)
    .sort((a, b) => a.carNumber - b.carNumber)
    .map((car) => {
      if (car.inOut === 'IN') {
        car.time += 23 * 60 + 59 - car.lastInTime // 출차내역이 없는 경우
      }
      if (basicTime > car.time) {
        return basicFee // 기본요금
      }
      return basicFee + Math.ceil((car.time - basicTime) / overTime) * overFee
    })
}
