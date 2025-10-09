function dividePlayers(skill: number[]): number {
  skill.sort((a, b) => a - b);
  const target = skill[0] + skill[skill.length - 1];
  let chemistry = 0;

  for (let i = 0, j = skill.length - 1; i < j; i++, j--) {
    if (skill[i] + skill[j] !== target) return -1;
    chemistry += skill[i] * skill[j];
  }

  return chemistry;
}
