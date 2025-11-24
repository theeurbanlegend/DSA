function maxSumRangeQuery(nums, requests) {
  const n = nums.length;
  const diff = new Array(n + 1).fill(0);

  for (const [l, r] of requests) {
    diff[l] += 1;
    diff[r + 1] -= 1;
  }

  const freq = new Array(n).fill(0);
  let curr = 0;

  for (let i = 0; i < n; i++) {
    curr += diff[i];
    freq[i] = curr;
  }

  nums.sort((a, b) => a - b);
  freq.sort((a, b) => a - b);

  let result = 0n;
  for (let i = 0; i < n; i++) {
    result += BigInt(nums[i]) * BigInt(freq[i]);
  }

  return Number(result % 1000000007n);
}
