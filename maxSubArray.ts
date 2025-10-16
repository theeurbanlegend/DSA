function findMaxAverage(nums: number[], k: number): number {
  const m = nums.length;
  let lpt = 0;
  let rpt = k;
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let max = sum;

  if (k < m) {
    while (rpt < m) {
      sum += nums[rpt] - nums[lpt];
      if (sum > max) {
        max = sum;
      }
      lpt++;
      rpt++;
    }
  }

  console.log(max);

  return max / k;
}
