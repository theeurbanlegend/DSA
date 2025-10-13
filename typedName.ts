function isLongPressedName(name: string, typed: string): boolean {
  let m = name.length;
  let n = typed.length;
  let start = 0;
  for (let i = 0; i < m; i++) {
    let a = name.at(i);

    if (typed.at(start) !== a) {
      return false;
    }
    if (name.at(i + 1) !== undefined && name.at(i + 1) != a) {
      while (typed.at(start) == a) {
        start++;
      }
    } else {
      start++;
    }
  }

  if (typed.at(start) !== undefined) {
    let last = name.at(m - 1);
    for (let i = start; i < n; i++) {
      if (typed.at(i) !== last) {
        return false;
      }
    }
  }
  return true;
}
