function increasingTriplet(nums: number[]): boolean {
  const n = nums.length;
  let max = Math.max(...nums);
  let a = max + 1;
  let b = a;

  for (let i = 0; i < n; i++) {
    if (nums[i] <= a) {
      a = nums[i];
    } else if (nums[i] <= b) {
      b = nums[i];
    } else {
      return true;
    }
  }

  return false;
}
