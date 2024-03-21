function solution(w, h) {
  const gcd = (a, b) => {
    return b === 0 ? a : gcd(b, a % b)
  }
  const g = gcd(w, h)
  return w * h - (w + h - g)
}
