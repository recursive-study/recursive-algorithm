function solution(skill, skill_trees) {
  const check = (skill_tree) => {
    const skills = skill.split('')
    const f_skill_tree = skill_tree.split('').filter((s) => skill.includes(s))

    for (let i = 0; i < f_skill_tree.length; i++) {
      if (f_skill_tree[i] === skills[0]) {
        skills.shift()
        continue
      } else {
        return false
      }
    }
    return true
  }

  return skill_trees.filter((skill_tree) => check(skill_tree)).length
}
