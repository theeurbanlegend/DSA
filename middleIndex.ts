function findMiddleIndex(nums: number[]): number {
  const prefixSumArr = [];
  const m = nums.length;
  let sum = 0;
  for (let i = 0; i < m; i++) {
    sum += nums[i];
    prefixSumArr.push(sum);
  }

  for (let i = 0; i < m; i++) {
    let leftSum = i == 0 ? 0 : sumRange(0, i - 1, prefixSumArr);
    let rightSum = i == m - 1 ? 0 : sumRange(i + 1, m - 1, prefixSumArr);
    if (leftSum == rightSum) return i;
  }

  return -1;
}

function sumRange(left: number, right: number, arr: number[]): number {
  if (left == 0) {
    return arr[right];
  } else {
    return arr[right] - arr[left - 1];
  }
}
