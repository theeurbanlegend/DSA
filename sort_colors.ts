/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  const m = nums.length;
  const map = new Map<number, number>();

  for (let i = 0; i < m; i++) {
    if (map.has(nums[i])) {
      let cnt = map.get(nums[i]);
      cnt++;
      map.set(nums[i], cnt);
    } else map.set(nums[i], 1);
  }
  for (let i = 0; i < m; i++) {
    if (map.has(0) && map.get(0) > 0) {
      nums[i] = 0;
      let cnt = map.get(0);
      cnt--;
      map.set(0, cnt);
    } else if (map.has(1) && map.get(1) > 0) {
      nums[i] = 1;
      let cnt = map.get(1);
      cnt--;
      map.set(1, cnt);
    } else if (map.has(2) && map.get(2) > 0) {
      nums[i] = 2;
      let cnt = map.get(2);
      cnt--;
      map.set(2, cnt);
    }
  }
}
