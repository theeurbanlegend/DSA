function threeSumClosest(nums: number[], target: number): number {
  const m = nums.length;
  let sol = [target, target];
  let res = target;
  nums.sort((a, b) => a - b);
  let solved = false;
  while (!solved) {
    for (let i = 0; i < m - 1; i++) {
      let left = i + 1;
      let right = m - 1;
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        if (sum == target || sum === sol[0] || sum === sol[1]) {
          res = sum;
          solved = true;
          break;
        } else if (sum < sol[0]) {
          left++;
        } else if (sum > sol[1]) {
          right--;
        }
      }

      if (solved || m == 3) {
        break;
      }
    }
    sol[0]++;
    sol[1]--;
  }

  return res;
}
