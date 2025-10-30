function minimumCardPickup(cards: number[]): number {
  const map = new Map();
  const n = cards.length;
  let minLen = Infinity;
  let currLen = 0;
  let left = 0;
  let right = 0;

  while (right < n) {
    map.set(cards[right], map.get(cards[right]) + 1 || 1);
    if (map.has(cards[right]) && map.get(cards[right]) > 1) {
      while (map.get(cards[right]) > 1) {
        if (cards[left] == cards[right]) {
          currLen = right - left + 1;
          minLen = Math.min(currLen, minLen);
        }
        map.set(cards[left], map.get(cards[left]) - 1);
        left++;
      }
    }
    right++;
  }
  // move window, while checking frequencies of numbers
  // track window length, per interation

  return minLen === Infinity ? -1 : minLen;
}
