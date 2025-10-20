function maxConsecutiveAnswers(answerKey: string, k: number): number {
  const helper = (target: string): number => {
    let left = 0,
      flips = 0,
      maxLen = 0;

    for (let right = 0; right < answerKey.length; right++) {
      if (answerKey[right] !== target) flips++;

      while (flips > k) {
        if (answerKey[left] !== target) flips--;
        left++;
      }

      maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
  };

  return Math.max(helper("T"), helper("F"));
}
