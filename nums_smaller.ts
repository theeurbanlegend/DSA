function smallerNumbersThanCurrent(nums: number[]): number[] {
  const m = nums.length;
  const copy = [...nums].sort((a, b) => a - b);
  const res: number[] = [];
  const map = new Map();

  for (let i = 0; i < m; i++) {
    if (!map.has(copy[i])) {
      map.set(copy[i], i);
    }
  }

  for (let i = 0; i < m; i++) {
    let cnt = map.get(nums[i]);
    res.push(cnt);
  }
  return res;
}
