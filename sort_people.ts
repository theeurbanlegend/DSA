function sortPeople(names: string[], heights: number[]): string[] {
  const n = heights.length;
  const map = new Map();
  let res = [];

  for (let i = 0; i < n; i++) {
    map.set(heights[i], names[i]);
  }
  heights.sort((a, b) => b - a);
  for (let i = 0; i < n; i++) {
    res.push(map.get(heights[i]));
  }
  return res;
}
