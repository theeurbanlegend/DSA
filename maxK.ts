function maxOperations(nums: number[], k: number): number {
  const m = nums.length;
  nums.sort((a, b) => a - b);
  let lpt = 0;
  let rpt = m - 1;
  let cnt = 0;
  while (lpt < rpt) {
    let sum = nums[lpt] + nums[rpt];
    if (sum == k) {
      cnt++;
      lpt++;
      rpt--;
    } else if (sum < k) {
      lpt++;
    } else {
      rpt--;
    }
  }
  return cnt;
}
