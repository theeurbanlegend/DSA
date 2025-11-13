function subarraySum(nums: number[], k: number): number {
  // sol 1: 21ms
  let count = 0;
  let sum = 0;
  const map = new Map<number, number>();
  map.set(0, 1);

  for (const num of nums) {
    sum += num;
    if (map.has(sum - k)) {
      count += map.get(sum - k)!;
    }

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
}
