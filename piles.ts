function maxCoins(piles: number[]): number {
  piles.sort((a, b) => b - a);
  let total = 0;
  let n = piles.length / 3;

  for (let i = 1; i < piles.length; i += 2) {
    if (n-- === 0) break;
    total += piles[i];
  }

  return total;
}
