function maxVowels(s: string, k: number): number {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let cnt = 0;

  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) cnt++;
  }

  let max = cnt;

  for (let rpt = k; rpt < s.length; rpt++) {
    if (vowels.has(s[rpt - k])) cnt--;
    if (vowels.has(s[rpt])) cnt++;
    max = Math.max(max, cnt);
  }

  return max;
}
