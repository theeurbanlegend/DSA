function intersect(nums1: number[], nums2: number[]): number[] {
  const m = nums1.length;
  const n = nums2.length;
  const map = new Map();
  let res = [];

  for (let i = 0; i < m; i++) {
    if (map.has(nums1[i])) {
      let arr = map.get(nums1[i]);
      arr[0]++;
      map.set(nums1[i], arr);
    } else map.set(nums1[i], [1, 0]);
  }
  for (let i = 0; i < n; i++) {
    if (map.has(nums2[i])) {
      let arr = map.get(nums2[i]);
      arr[1]++;
      map.set(nums2[i], arr);
    } else map.set(nums2[i], [0, 1]);
  }

  map.forEach((arr, key) => {
    if (arr[0] >= 1 && arr[1] >= 1) {
      let min = 0;
      if (arr[0] > arr[1]) {
        min = arr[1];
      } else {
        min = arr[0];
      }
      for (let i = 0; i < min; i++) {
        res.push(key);
      }
    }
  });

  return res;
}
