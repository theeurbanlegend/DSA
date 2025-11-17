function subarraysDivByK(nums: number[], k: number): number {
  let count = 0;
  let sum = 0;
  const map = new Map<number, number>();
  map.set(0, 1);

  for (const num of nums) {
    sum += num;
    const mod = ((sum % k) + k) % k;

    if (map.has(mod)) {
      count += map.get(mod)!;
    }

    map.set(mod, (map.get(mod) || 0) + 1);
  }

  return count;

  //brute force
  // const m = nums.length
  // let count = 0

  // for (let i = 0; i < m; i++) {
  //     let sum = 0
  //     for (let j = i; j < m; j++) {
  //         sum += nums[j]
  //         if (sum % k == 0) count++
  //     }
  //     sum = 0
  // }
  // return count
}
