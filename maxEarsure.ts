function maximumUniqueSubarray(nums: number[]): number {
  const map = new Map();
  const m = nums.length;
  let sum = 0;
  let max = 0;
  let left = 0;
  let right = 0;

  while (right < m) {
    map.set(nums[right], map.get(nums[right]) + 1 || 1);
    sum += nums[right];
    if (map.has(nums[right]) && map.get(nums[right]) > 1) {
      while (left < right) {
        sum -= nums[left];
        map.set(nums[left], map.get(nums[left]) - 1);
        if (nums[left] == nums[right]) {
          left++;
          break;
        }
        left++;
      }
    }
    max = Math.max(sum, max);
    right++;
  }
  return max;
}

//need to find the largest subarray that has unique elements, and return the sum of its values
//use a hashmap to track the frequencies of values in a subarray
//use sliding window + 2 pinters to move window
//contract window when duplicates are found and increase when uniques are found
