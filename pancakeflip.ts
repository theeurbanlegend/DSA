function pancakeSort(arr: number[]): number[] {
  const moves = [];
  let sorted = false;
  let end = arr.length;

  while (!sorted) {
    if (end < 2) {
      sorted = true;
      break;
    }
    let max = Math.max(...arr.slice(0, end));
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == max) {
        if (i == end - 1) {
          end--;
          continue;
        }
        let pc = arr.slice(0, i + 1);
        let rest = arr.slice(i + 1, end);
        moves.push(i + 1);
        pc.reverse();
        arr = [...pc, ...rest];
        moves.push(end);
        arr.reverse();
        end--;
        break;
      }
    }
  }
  return moves;
}
