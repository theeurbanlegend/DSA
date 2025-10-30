function maxScore(cardPoints: number[], k: number): number {
  const total = cardPoints.reduce((a, b) => a + b, 0);
  const n = cardPoints.length;
  const windowSize = n - k;
  let windowSum = 0;

  for (let i = 0; i < windowSize; i++) windowSum += cardPoints[i];
  let minWindowSum = windowSum;

  for (let i = windowSize; i < n; i++) {
    windowSum += cardPoints[i] - cardPoints[i - windowSize];
    minWindowSum = Math.min(minWindowSum, windowSum);
  }

  return total - minWindowSum;
}
