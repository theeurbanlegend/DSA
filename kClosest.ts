function kClosest(points: number[][], k: number): number[][] {
  points.sort((a, b) => {
    let distA = a[0] ** 2 + a[1] ** 2;
    let distB = b[0] ** 2 + b[1] ** 2;
    return distA - distB;
  });
  return points.slice(0, k);
}
