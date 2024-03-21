function solution(bandage, health, attacks) {
  const [t, x, y] = bandage

  let continue_time = false // 연속성공
  let time = 0
  let hp = health

  for (const [attack, power] of attacks) {
    let duration = attack - time - 1
    let next_hp = hp + (duration * x + Math.floor(duration / t) * y)
    time = attack

    hp = next_hp > health ? health : next_hp
    hp -= power

    if (hp < 1) continue_time = true
  }

  return continue_time ? -1 : hp
}
