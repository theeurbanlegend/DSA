function removeElement(nums: number[], val: number): number {
  const m = nums.length;
  let left = 0;
  let right = m - 1;

  while (left <= right) {
    if (nums[left] == val) {
      if (nums[right] != val) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
      } else {
        right--;
        continue;
      }
      right--;
    }
    left++;
  }
  return right + 1;
}
