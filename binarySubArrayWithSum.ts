function numSubarraysWithSum(nums: number[], goal: number): number {
  //the goal is to get the prefix sum from 0 -> n-1, then reduce from 0 -> n-1
  let count = 0;
  let sum = 0;
  const map = new Map<number, number>();
  map.set(0, 1);

  for (const num of nums) {
    sum += num;
    if (map.has(sum - goal)) {
      count += map.get(sum - goal)!;
    }

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
}
