class NumArray {
  nums: number[] = [];
  oracle: number[] = [];
  constructor(nums: number[]) {
    this.nums = nums;
    this.fillOracle();
  }

  private fillOracle() {
    this.oracle[0] = this.nums[0];
    let cum = this.oracle[0];
    for (let i = 1; i < this.nums.length; i++) {
      let sum = this.nums[i] + cum;
      this.oracle.push(sum);
      cum = sum;
    }
  }

  sumRange(left: number, right: number): number {
    if (left == 0) {
      return this.oracle[right];
    } else {
      return this.oracle[right] - this.oracle[left - 1];
    }
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
