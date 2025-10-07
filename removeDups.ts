function removeDuplicates(nums: number[]): number {
  const map = new Map();
  let m = nums.length;
  let pt = 0;
  let k = 0;

  while (pt < m) {
    if (map.has(nums[pt])) {
      nums.splice(pt, 1);
      m = nums.length;
    } else {
      map.set(nums[pt], 1);
      k++;
      pt++;
    }
  }
  return k;
}
