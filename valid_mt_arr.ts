function validMountainArray(arr: number[]): boolean {
  const m = arr.length;
  let flipped = false;
  let valid = true;
  let last = arr[0];

  if (m >= 3) {
    for (let i = 1; i < m; i++) {
      if (flipped == false) {
        if (last < arr[i]) {
          last = arr[i];
          continue;
        } else {
          if (!flipped && last !== arr[i] && i > 1) {
            flipped = true;
            last = arr[i];
            continue;
          } else {
            valid = false;
            break;
          }
        }
      } else {
        if (last > arr[i]) {
          last = arr[i];
          continue;
        } else {
          valid = false;
          break;
        }
      }
    }
    return valid && flipped;
  } else {
    return false;
  }
}
