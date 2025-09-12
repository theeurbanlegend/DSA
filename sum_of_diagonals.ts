function diagonalSum(mat: number[][]): number {
  const m = mat.length;
  let sum = 0;

  for (let i = 0; i < m; i++) {
    sum = mat[i][i] + sum;
    sum = mat[i][m - 1 - i] + sum;
  }
  if (m % 2 !== 0) {
    let mri = (m - 1) / 2;
    sum = sum - mat[mri][mri];
  }
  return sum;
}
