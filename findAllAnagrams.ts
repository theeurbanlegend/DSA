function findAnagrams(s: string, p: string): number[] {
  const m = s.length;
  const n = p.length;
  const pArr = Array.from(p);
  const sArr = Array.from(s);
  const sMap = new Map();
  const pMap = new Map();
  const res = [];
  const curr = [];

  for (let i = 0; i < n; i++) {
    if (pMap.has(pArr[i])) {
      let cnt = pMap.get(pArr[i]);
      cnt++;
      pMap.set(pArr[i], cnt);
    } else {
      pMap.set(pArr[i], 1);
    }
    if (sMap.has(sArr[i])) {
      let cnt = sMap.get(sArr[i]);
      cnt++;
      sMap.set(sArr[i], cnt);
    } else {
      sMap.set(sArr[i], 1);
    }
    curr.push(sArr[i]);
  }

  for (let rpt = n; rpt <= m; rpt++) {
    let matchCnt = 0;
    for (const [key, value] of pMap) {
      if (sMap.has(key) && sMap.get(key) === value) {
        matchCnt++;
      }
    }
    if (matchCnt == pMap.size) {
      res.push(rpt - n);
    }
    curr.push(sArr[rpt]);
    if (sMap.has(sArr[rpt])) {
      let cnt = sMap.get(sArr[rpt]);
      cnt++;
      sMap.set(sArr[rpt], cnt);
    } else {
      sMap.set(sArr[rpt], 1);
    }
    let del = curr.shift();
    if (sMap.has(del)) {
      let cnt = sMap.get(del);
      cnt--;
      if (cnt == 0) {
        sMap.delete(del);
      } else {
        sMap.set(del, cnt);
      }
    }
  }

  return res;
}
