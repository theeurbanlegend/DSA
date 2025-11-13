function shiftingLetters(s: string, shifts: number[][]): string {
  const n = s.length;
  const diff = new Array(n + 1).fill(0);

  for (const [start, end, dir] of shifts) {
    const val = dir === 1 ? 1 : -1;
    diff[start] += val;
    diff[end + 1] -= val;
  }

  for (let i = 1; i < n; i++) {
    diff[i] += diff[i - 1];
  }

  const sArr = s.split("");
  const base = "a".charCodeAt(0);

  for (let i = 0; i < n; i++) {
    const old = sArr[i].charCodeAt(0) - base;
    const shifted = (old + (diff[i] % 26) + 26) % 26;
    sArr[i] = String.fromCharCode(base + shifted);
  }

  return sArr.join("");
}
