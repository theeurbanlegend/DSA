/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  const m = nums.length;
  let i = 0;
  let pt = m - 1;

  while (nums[pt] == 0) {
    pt--;
  }

  while (i < m) {
    if (i <= pt) {
      if (nums[i] == 0) {
        nums.splice(i, 1);
        nums.push(0);
        pt--;
      } else {
        i++;
      }
    } else break;
  }
}
