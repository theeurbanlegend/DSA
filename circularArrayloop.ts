function circularArrayLoop(nums: number[]): boolean {
  const n = nums.length;
  const visitedSet = new Set(); // to see occurences of elements
  //Floyd's cycle-detection algorithm
  const mod = (n, m) => ((n % m) + m) % m;

  function getNextIndex(idx: number, currDir: number) {
    let nextIndex = mod(idx + nums[idx], n);
    let nextDir = nums[nextIndex] < 0 ? -1 : 1;
    if (currDir !== nextDir || idx === nextIndex) nextIndex = -1;
    return nextIndex;
  }

  for (let i = 0; i < nums.length; i++) {
    if (visitedSet.has(i)) continue;
    let fpt = i;
    let spt = i;
    let currDir = nums[i] < 0 ? -1 : 1;
    while (true) {
      visitedSet.add(spt);
      visitedSet.add(fpt);
      spt = getNextIndex(spt, currDir);
      fpt = getNextIndex(fpt, currDir);

      if (spt === -1 || fpt === -1) break;

      fpt = getNextIndex(fpt, currDir);
      if (fpt === -1) break;
      if (spt === fpt) return true;
    }
  }

  return false;
}
