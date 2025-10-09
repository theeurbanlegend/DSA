function numRescueBoats(people: number[], limit: number): number {
  const m = people.length;
  let cnt = 0;
  let p1 = 0;
  let p2 = m - 1;
  people.sort((a, b) => a - b);

  while (p1 <= p2) {
    let w = people[p1] + people[p2];
    if (w > limit) {
      p2--;
    } else {
      p1++;
      p2--;
    }
    cnt++;
  }
  return cnt;
}
