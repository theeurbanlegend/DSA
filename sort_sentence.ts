function sortSentence(s: string): string {
  const arr = s.split(" ");
  const m = arr.length;
  const res = Array.from({ length: m }).fill(".");

  for (let i = 0; i < m; i++) {
    let n = arr[i].length;
    let word = arr[i].slice(0, n - 1);
    let index = Number(arr[i].slice(n - 1));
    res[index - 1] = word;
  }
  return res.join(" ");
}
