function numSubmatrixSumTarget(matrix: number[][], target: number): number {
  const m = matrix.length;
  const n = matrix[0].length;

  const prefix = Array.from({ length: m }, () => Array(n + 1).fill(0));
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      prefix[r][c + 1] = prefix[r][c] + matrix[r][c];
    }
  }

  let count = 0;

  for (let left = 0; left < n; left++) {
    for (let right = left; right < n; right++) {
      let sum = 0;
      const map = new Map();
      map.set(0, 1);

      for (let r = 0; r < m; r++) {
        sum += prefix[r][right + 1] - prefix[r][left];

        if (map.has(sum - target)) {
          count += map.get(sum - target);
        }

        map.set(sum, (map.get(sum) || 0) + 1);
      }
    }
  }

  return count;
}
