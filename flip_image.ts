function flipAndInvertImage(image: number[][]): number[][] {
  let result = image;
  const m = image.length;
  const n = image[0].length;
  for (let i = 0; i < m; i++) {
    result[i] = result[i].reverse();
    for (let j = 0; j < n; j++) {
      result[i][j] = result[i][j] == 0 ? 1 : 0;
    }
  }
  return result;
}
