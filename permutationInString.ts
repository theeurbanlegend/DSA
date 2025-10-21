function checkInclusion(s1: string, s2: string): boolean {
  const m = s1.length;
  const n = s2.length;
  const s1Map = new Map();
  const s2Map = new Map();

  for (let i = 0; i < m; i++) {
    s1Map.set(s1[i], s1Map.get(s1[i]) + 1 || 1);
    s2Map.set(s2[i], s2Map.get(s2[i]) + 1 || 1);
  }

  //use s2 length for the sliding window length
  // for sliding window technique, in we will check that in the window thatt matches the target string length, the character frequencies match
  for (let i = m - 1; i < n; i++) {
    let cnt = 0;
    for (const [key, value] of s1Map) {
      if (s2Map.has(key) && s2Map.get(key) == value) {
        cnt += value;
      }
    }
    if (cnt == m) return true;
    let left = i - (m - 1);
    let right = i + 1;
    if (s2Map.get(s2[left]) == 1) {
      s2Map.delete(s2[left]);
    } else s2Map.set(s2[left], s2Map.get(s2[left]) - 1);
    //add right
    s2Map.set(s2[right], s2Map.get(s2[right]) + 1 || 1);
  }

  return false;
}
