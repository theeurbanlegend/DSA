function carPooling(trips: number[][], capacity: number): boolean {
  const diff = Array(1001).fill(0);

  for (const [passengers, from, to] of trips) {
    diff[from] += passengers;
    diff[to] -= passengers;
  }

  let current = 0;
  for (let i = 0; i < diff.length; i++) {
    current += diff[i];
    if (current > capacity) return false;
  }

  return true;
}
