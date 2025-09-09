function maxScoreIndices(nums) {
  const n = nums.length;
  const totalOnes = nums.reduce((acc, num) => acc + num, 0);
  let leftZeros = 0;
  let onesSeen = 0;
  let maxScore = -Infinity;
  let result = [];

  for (let i = 0; i <= n; i++) {
    const rightOnes = totalOnes - onesSeen;
    const score = leftZeros + rightOnes;

    if (score > maxScore) {
      maxScore = score;
      result = [i];
    } else if (score === maxScore) {
      result.push(i);
    }

    if (i < n) {
      if (nums[i] === 0) leftZeros++;
      else onesSeen++;
    }
  }

  return result;
}

console.log(arr.length);
console.log(performance.now() / 1000);
console.log(maxScoreIndices(arr));
console.log(performance.now() / 1000);
