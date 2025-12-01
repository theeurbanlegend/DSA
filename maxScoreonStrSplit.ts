function maxScore(s: string): number {
  const n = s.length;
  const sArr: number[] = Array.from(s, (str) => parseInt(str));
  const prefixSum: number[] = [];
  prefixSum[0] = sArr[0];

  for (let i = 1; i < n; i++) {
    prefixSum[i] = prefixSum[i - 1] + sArr[i];
  }
  let max = 0;

  for (let i = 0; i < n - 1; i++) {
    let left: number = i + 1 - prefixSum[i];
    let right: number = prefixSum[n - 1] - prefixSum[i];
    max = Math.max(max, left + right);
  }

  return max;
}
