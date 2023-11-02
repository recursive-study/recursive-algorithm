function solution(phone_book) {
  return !phone_book.sort().some((_, idx) => {
    // 마지막 요소이면 return
    if (idx === phone_book.length - 1) return

    // 앞의 요소가 뒤의 요소의 접두사이면 false return
    if (phone_book[idx + 1].startsWith(phone_book[idx])) {
      return true
    }
  })
}
