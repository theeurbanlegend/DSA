function totalFruit(fruits: number[]): number {
  const n = fruits.length;
  const fruitMap = new Map<number, number>(); //for storing fruit type frequencies
  //find largest subarray of like-type fruit using sliding window
  let left = 0;
  let right = 0;
  let sum = 0;
  let max = 0;

  while (right < n) {
    fruitMap.set(fruits[right], fruitMap.get(fruits[right]) + 1 || 1);
    if (fruitMap.size > 2) {
      //check current max
      while (fruitMap.size > 2) {
        fruitMap.set(fruits[left], fruitMap.get(fruits[left]) - 1);
        if (fruitMap.get(fruits[left]) == 0) {
          fruitMap.delete(fruits[left]);
        }
        left++;
      }
    }
    sum = right - left + 1;
    max = Math.max(sum, max);
    right++;
  }

  return max;
}
