function solution(id_list, report, k) {
  const answer = Array.from(id_list, () => 0)
  if (id_list.length < k) return answer

  // {muzi : [무지를 신고한 유저], frodo :[],...}
  const report_list = {}

  id_list.forEach((id) => {
    report_list[id] = [] // { muzi: [], frodo: [], apeach: [], neo: [] }
  })

  report.forEach((r) => {
    const [id, report_id] = r.split(' ')
    // 신고기록이 없으면 추가
    if (!report_list[report_id].includes(id)) {
      report_list[report_id].push(id)
      //report_list { muzi: [], frodo: [ 'muzi' ], apeach: [], neo: [] }
    }
  })

  for (const report_id in report_list) {
    if (report_list[report_id].length >= k) {
      report_list[report_id].forEach((id) => {
        answer[id_list.indexOf(id)] += 1
      })
    }
  }

  return answer
}
