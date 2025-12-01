function getSumAbsoluteDifferences(nums: number[]): number[] {
  //sum of absolute diff
  const n = nums.length;
  const prefix = new Array(n).fill(0);
  const suffix = new Array(n).fill(0);

  prefix[0] = nums[0];
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] + nums[i];
  }

  suffix[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] + nums[i];
  }

  const result: number[] = new Array(n);

  for (let i = 0; i < n; i++) {
    const leftCount = i;
    const rightCount = n - i - 1;

    const leftSum = leftCount > 0 ? nums[i] * leftCount - prefix[i - 1] : 0;
    const rightSum = rightCount > 0 ? suffix[i + 1] - nums[i] * rightCount : 0;

    result[i] = leftSum + rightSum;
  }

  return result;

  // brute force (42ms)
  // const n = nums.length
  // const result = []

  // for (let i = 0; i < n; i++) {
  //     let sum = 0
  //     for (let j = 0; j < n; j++) {
  //         if (i === j) continue;
  //         sum += Math.abs(nums[i] - nums[j])
  //     }
  //     result.push(sum)
  // }
  // return result
}
