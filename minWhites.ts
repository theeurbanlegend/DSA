function minimumRecolors(blocks: string, k: number): number {
  let whites = 0;
  let minOps = Infinity;

  for (let i = 0; i < k; i++) {
    if (blocks[i] === "W") whites++;
  }

  minOps = whites;

  for (let i = k; i < blocks.length; i++) {
    if (blocks[i] === "W") whites++;
    if (blocks[i - k] === "W") whites--;
    minOps = Math.min(minOps, whites);
  }

  return minOps;
}
