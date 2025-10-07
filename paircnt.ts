function countPairs(nums: number[], target: number): number {
  const m = nums.length;
  let cnt = 0;
  for (let i = 0; i < m; i++) {
    for (let j = i + 1; j < m; j++) {
      if (nums[j] !== undefined) {
        let sum = nums[i] + nums[j];
        if (sum < target) {
          cnt++;
        }
      }
    }
  }
  return cnt;
}
