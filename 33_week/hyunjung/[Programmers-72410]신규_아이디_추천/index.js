function solution(new_id) {
  new_id = new_id
    .toLowerCase()
    .replace(/[^\w-._]+/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.+|\.+$/g, '')

  if (new_id === '') {
    new_id = 'a'
  }

  if (new_id.length >= 16) {
    new_id = new_id.slice(0, 15).replace(/^\.+|\.+$/g, '')
  }

  if (new_id.length <= 2) {
    while (new_id.length !== 3) {
      let last_str = new_id[new_id.length - 1]
      new_id += last_str
    }
  }

  return new_id
}
