function maxWidthOfVerticalArea(points: number[][]): number {
  let max = 0;
  const m = points.length;
  points.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < m; i++) {
    if (points[i] && points[i + 1]) {
      let diff = points[i + 1][0] - points[i][0];
      if (max < diff) {
        max = diff;
      }
    }
  }

  return max;
}
