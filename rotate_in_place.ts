/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const m = matrix.length;
  const n = matrix[0].length;
  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let r = m - 1; r >= 0; r--) {
      arr.push(matrix[r][i]);
    }
    matrix.push(arr);
  }
  matrix.splice(0, m);
}
