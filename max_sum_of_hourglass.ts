function maxSum(grid: number[][]): number {
  let pt = 0;
  let max = 0;
  const m = grid.length;

  while (grid[0][pt + 2] != undefined) {
    for (let i = 0; i < m; i++) {
      if (Array.isArray(grid[i + 2])) {
        let sum =
          grid[i + 1][pt + 1] +
          grid[i][pt] +
          grid[i][pt + 1] +
          grid[i][pt + 2] +
          grid[i + 2][pt] +
          grid[i + 2][pt + 1] +
          grid[i + 2][pt + 2];
        if (max < sum) {
          max = sum;
        }
      }
    }
    pt++;
  }
  return max;
}
