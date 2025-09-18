function smallestNumber(num: number): number {
  const arr = Array.from(Math.abs(num).toString(), (s) => parseInt(s));

  if (num < 0) {
    return parseInt(arr.sort((a, b) => b - a).join("")) * -1;
  } else {
    arr.sort((a, b) => a - b);
    if (arr[0] == 0) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
          arr[0] = arr[i];
          arr[i] = 0;
          break;
        }
      }
    }
    return parseInt(arr.join(""));
  }
}
