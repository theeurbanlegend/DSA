function transpose(matrix: number[][]): number[][] {
  let res: number[][] = [];
  const m = matrix.length;
  const n = matrix[0].length;
  for (let i = 0; i < n; i++) {
    let arr: number[] = [];
    for (let j = 0; j < m; j++) {
      arr.push(matrix[j][i]);
    }
    res.push(arr);
  }
  return res;
}
