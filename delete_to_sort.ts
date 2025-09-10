function minDeletionSize(strs: string[]): number {
  let cnt = 0;
  const m = strs.length;
  const n = strs[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (j + 2 < m) {
        if (
          !(strs[j][i] <= strs[j + 1][i]) ||
          !(strs[j + 1][i] <= strs[j + 2][i])
        ) {
          cnt++;
          break;
        }
      } else if (j + 1 < m) {
        if (!(strs[j][i] <= strs[j + 1][i])) {
          cnt++;
          break;
        }
      }
    }
  }
  return cnt;
}
