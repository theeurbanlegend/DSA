function countPairs(nums: number[], k: number): number {
  const n = nums.length;
  let pt = 0;
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    pt = i + 1;
    while (pt < n) {
      let rem = (i * pt) % k;
      if (nums[i] == nums[pt] && rem == 0) {
        cnt++;
      }
      pt++;
    }
  }
  return cnt;
}
