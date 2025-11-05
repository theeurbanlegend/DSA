function numberOfSubarrays(nums: number[], k: number): number {
  let prefixCount = new Map();
  prefixCount.set(0, 1);
  let curr = 0;
  let res = 0;

  for (let num of nums) {
    if (num % 2 !== 0) curr++;
    if (prefixCount.has(curr - k)) res += prefixCount.get(curr - k);
    prefixCount.set(curr, (prefixCount.get(curr) || 0) + 1);
  }

  return res;
}
