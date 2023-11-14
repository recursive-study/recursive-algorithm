function solution(str1, str2) {
  // 자카드 유사도 = 교집합 크기 / 합집합 크기

  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()

  let re = /[a-z]/

  const getSet = (str) => {
    let set = []
    for (let i = 0; i < str.length - 1; i++) {
      if (re.test(str[i]) && re.test(str[i + 1])) {
        set.push(str.slice(i, i + 2))
      }
    }
    return set
  }

  let set1 = getSet(str1)
  let set2 = getSet(str2)

  // 둘다 공집합인 경우
  if (set1.length === 0 && set2.length === 0) return 65536

  //합집합
  const union = []

  //교집합
  const intersection = []

  for (let i = 0; i < set2.length; i++) {
    //교집합 추가
    if (set1.indexOf(set2[i]) !== -1) {
      intersection.push(set1.splice(set1.indexOf(set2[i]), 1))
    }
    //합집합 추가
    union.push(set2[i])
  }

  //차집합 추가
  for (let i = 0; i < set1.length; i++) {
    union.push(set1[i])
  }

  return parseInt((intersection.length / union.length) * 65536)
}
