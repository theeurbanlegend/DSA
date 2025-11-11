class NumMatrix {
  //sol 2: accepted runtime 78ms
  private matrix: number[][] = [];
  private oracle: number[][] = [];
  constructor(matrix: number[][]) {
    this.matrix = matrix;
    this.fillOracle();
  }

  private fillOracle() {
    const cols = this.matrix[0].length;
    const rows = this.matrix.length;

    for (let i = 0; i < rows; i++) {
      let rowSum = 0;
      this.oracle.push([]);
      for (let j = 0; j < cols; j++) {
        rowSum += this.matrix[i][j];
        this.oracle[i].push(rowSum);
      }
    }
  }

  private sumRange(row: number, leftCol: number, rightCol: number): number {
    if (leftCol == 0) {
      return this.oracle[row][rightCol];
    } else {
      return this.oracle[row][rightCol] - this.oracle[row][leftCol - 1];
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    let [xA, yA] = [row1, col1];
    let [xB, yB] = [row2, col2];
    let sum = 0;

    for (let i = xA; i <= xB; i++) {
      sum += this.sumRange(i, yA, yB);
    }
    return sum;
  }
  //sol 1: accepted at 1870ms
  // sumRegion(row1: number, col1: number, row2: number, col2: number): number {
  //     let [xA, yA] = [row1, col1]
  //     let [xB, yB] = [row2, col2]
  //     let sum = 0

  //     for (let i = xA; i <= xB; i++) {
  //         for (let j = yA; j <= yB; j++) {
  //             sum += this.matrix[i][j]
  //         }
  //     }
  //     return sum
  // }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
