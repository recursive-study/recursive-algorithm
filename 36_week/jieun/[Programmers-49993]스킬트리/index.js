function solution(skill, skill_trees) {
	let count = 0;

	const filteredTrees = skill_trees.map((tree) => tree.split('').filter((s) => skill.includes(s)));
	console.log(filteredTrees);

	for (const filteredTree of filteredTrees) {
		let isValid = true;
		for (let i = 0; i < filteredTree.length; i++) {
			if (skill[i] !== filteredTree[i]) {
				isValid = false;
				break;
			}
		}
		if (isValid) count++;
	}

	return count;
}
