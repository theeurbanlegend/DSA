function plusOne(digits: number[]): number[] {
  let m = digits.length;
  let overflowIndex = m - 1;

  digits[overflowIndex]++;

  if (digits[overflowIndex] > 9) {
    while (digits[overflowIndex] > 9) {
      digits[overflowIndex] = 0;
      if (digits[overflowIndex - 1] !== undefined) {
        digits[overflowIndex - 1]++;
      } else {
        digits.unshift(1);
      }
      overflowIndex--;
    }
  }
  return digits;
}
