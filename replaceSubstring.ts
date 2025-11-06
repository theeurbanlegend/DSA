function balancedString(s: string): number {
  const n = s.length;
  const target = n / 4;

  const count: Record<string, number> = { Q: 0, W: 0, E: 0, R: 0 };
  for (let c of s) count[c]++;

  if (Object.values(count).every((c) => c === target)) return 0;

  let left = 0;
  let minLen = n;

  for (let right = 0; right < n; right++) {
    count[s[right]]--;

    while (
      count["Q"] <= target &&
      count["W"] <= target &&
      count["E"] <= target &&
      count["R"] <= target
    ) {
      minLen = Math.min(minLen, right - left + 1);
      count[s[left]]++;
      left++;
    }
  }
}
