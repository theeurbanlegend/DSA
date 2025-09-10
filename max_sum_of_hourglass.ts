function maxSum(grid: number[][]): number {
  let pt = 0;
  let max = 0;
  const m = grid.length;
  const n = grid[0].length;

  while (grid[0][pt + 2] != undefined) {
    for (let i = 0; i < m; i++) {
      if (Array.isArray(grid[i + 2])) {
        let center = grid[i + 1][pt + 1];
        let top = grid[i][pt] + grid[i][pt + 1] + grid[i][pt + 2];
        let bottom =
          grid[i + 2][pt] + grid[i + 2][pt + 1] + grid[i + 2][pt + 2];
        let sum = center + top + bottom;
        if (max < sum) {
          max = sum;
        }
      }
    }
    pt++;
  }
  return max;
}
