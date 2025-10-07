function getCommon(nums1: number[], nums2: number[]): number {
  const map = new Map();
  const m = nums1.length;
  const n = nums2.length;
  let res = -1;

  for (let i = 0; i < m; i++) {
    if (!map.has(nums1[i])) {
      map.set(nums1[i], 1);
    }
  }

  for (let i = 0; i < n; i++) {
    if (map.has(nums2[i])) {
      res = nums2[i];
      break;
    }
  }
  return res;
}
