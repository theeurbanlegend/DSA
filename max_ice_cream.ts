function maxIceCream(costs: number[], coins: number): number {
  const m = costs.length;
  costs.sort((a, b) => a - b);
  let cnt = 0;
  let rem = coins;

  for (let i = 0; i < m; i++) {
    if (rem - costs[i] >= 0) {
      cnt++;
      rem = rem - costs[i];
    }
  }
  return cnt;
}
