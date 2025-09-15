function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const m = arr1.length;
  const n = arr2.length;
  const map = new Map<number, number[]>();
  let rem: number[] = [];
  let res: number[] = [];

  for (let i = 0; i < m; i++) {
    if (map.has(arr1[i])) {
      let arr = map.get(arr1[i])!;
      arr.push(arr1[i]);
      map.set(arr1[i], arr);
    } else map.set(arr1[i], [arr1[i]]);
  }

  for (let i = 0; i < n; i++) {
    if (map.has(arr2[i])) {
      let arr = map.get(arr2[i])!;
      res.push(...arr);
      map.delete(arr2[i]);
    }
  }

  if (map.size > 0) {
    map.forEach((arr) => {
      rem.push(...arr);
    });
  }
  rem.sort((a, b) => a - b);
  for (let i = 0; i < rem.length; i++) {
    res.push(rem[i]);
  }
  return res;
}
