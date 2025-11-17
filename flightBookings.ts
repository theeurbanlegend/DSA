function corpFlightBookings(bookings: number[][], n: number): number[] {
  const m = bookings.length;
  let seatArr: number[] = Array.from({ length: n }).fill(0) as number[];

  for (let i = 0; i < m; i++) {
    const [f, l, s] = bookings[i];
    let start = f - 1;
    let end = l - 1;

    while (start <= end) {
      seatArr[start] += s;
      start++;
    }
  }
  return seatArr;
}
