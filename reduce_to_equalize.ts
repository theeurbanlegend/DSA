function reductionOperations(nums: number[]): number {
  let ops = 0;
  let steps = 0;
  const m = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 1; i < m; i++) {
    if (nums[i] !== nums[i - 1]) steps++;
    ops += steps;
  }
  return ops;
}
