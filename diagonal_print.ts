function findDiagonalOrder(matrix: number[][]): number[] {
  const m = matrix.length;
  const n = matrix[0].length;
  const indexArr: number[][][] = [];
  const res: number[] = [];

  for (let i = 0; i < m + n - 1; i++) {
    let arr: number[][] = [];
    let lpt = i < n ? 0 : i - n + 1;
    let rpt = i < n ? i : n - 1;

    while (lpt < m && rpt >= 0) {
      arr.push([lpt, rpt]);
      lpt++;
      rpt--;
    }
    indexArr.push(arr);
  }

  for (let d = 0; d < indexArr.length; d++) {
    let coords = indexArr[d];
    if (d % 2 === 0) coords = coords.reverse();
    for (let [r, c] of coords) {
      res.push(matrix[r][c]);
    }
  }

  return res;
}
