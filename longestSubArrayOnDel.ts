function longestSubarray(nums: number[]): number {
  const m = nums.length;
  let max = 0;
  let left = 0;
  let right = 0;
  let cross = 0;
  let min = 1;

  for (let i = 0; i < m; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }

    if (nums[i] == 0 && i !== 0 && i !== m - 1) {
      cross++;
    }

    if (cross == 0 && nums[i] == 1) {
      left++;
    } else if (cross == 1 && nums[i] == 1) {
      right++;
    }
    if (cross == 2) {
      if (left + right > max) {
        max = left + right;
      }
      left = right;
      right = 0;
      cross = 1;
    }

    if (left + right > max && i == m - 1) {
      max = left + right;
    }
  }

  if (min === 1) {
    return left + right - 1;
  }

  return max;
}
