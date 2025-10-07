function twoSum(numbers: number[], target: number): number[] {
  const m = numbers.length;

  for (let i = 0; i < m; i++) {
    for (let j = i + 1; j < m; j++) {
      if (numbers[j] !== undefined) {
        let sum = numbers[i] + numbers[j];
        if (sum > target) break;
        if (sum == target) {
          return [i + 1, j + 1];
        }
      }
    }
  }
  return [];
}
