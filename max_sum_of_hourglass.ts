function maxSum(grid: number[][]): number {
  const rows = grid.length;
  const columns = grid[0].length;
  const prefixArr = [];
  let max = 0;

  for (let i = 0; i < rows; i++) {
    let sum = 0;
    let arr = grid[i].map((el) => {
      sum = el + sum;
      return sum;
    });
    prefixArr.push(arr);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (Array.isArray(grid[i + 2])) {
        if (grid[i][j + 2] !== undefined) {
          let sum =
            sumRange(j, j + 2, prefixArr[i]) +
            grid[i + 1][j + 1] +
            sumRange(j, j + 2, prefixArr[i + 2]);
          max = Math.max(sum, max);
        } else break;
      } else return max;
    }
  }
}

function sumRange(left: number, right: number, arr: number[]): number {
  if (left == 0) {
    return arr[right];
  } else {
    return arr[right] - arr[left - 1];
  }
}
