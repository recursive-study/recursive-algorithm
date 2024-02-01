function solution(arrayA, arrayB) {
  const getEvery = (a, b) => {
    for (let i = a[0]; i > 0; i--) {
      // console.log(i)
      if (a.every((el) => el % i === 0) && b.every((el) => el % i !== 0)) {
        return i
      }
    }
    return 0
  }

  return Math.max(getEvery(arrayA, arrayB), getEvery(arrayB, arrayA))
}
