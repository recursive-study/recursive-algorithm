function solution(msg) {
  const answer = [] //11, 1
  let next = ''
  let lastNumber = 27

  const dir = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  }

  const newWord = msg.split('').reduce((acc, cur) => {
    next = acc + cur //KA //AK

    if (!dir[next]) {
      dir[next] = lastNumber++ //사전에 없는 경우 dir[KA] = 27을 넣고 lastNumber를 28로 만듬
    } else {
      return acc + cur // 사전에 있으면 KA 합침
    }

    if (dir[acc] !== undefined) answer.push(dir[acc]) // K의 색인번호 push //A

    return cur
  })

  answer.push(dir[newWord])

  return answer
}
