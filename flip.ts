function numTimesAllBlue(flips: number[]): number {
  let cnt = 0;
  let m = flips.length;
  let s = Array.from({ length: flips.length }).fill("0");
  for (let i = 0; i < m; i++) {
    let leftZeros = true;
    let rightOnes = true;
    let index = flips[i];
    let pt = m - 1;
    s[index - 1] = "1";
    while (pt >= 0) {
      if (pt > i && s[pt] == "1") {
        //not all right from index are ones
        rightOnes = false;
        break;
      }
      if (pt <= i && s[pt] == "0") {
        //not all left are zero from index
        leftZeros = false;
        break;
      }
      pt--;
    }
    if (leftZeros && rightOnes) cnt++;
  }
  return cnt;
}
