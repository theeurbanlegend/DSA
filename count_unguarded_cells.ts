function countUnguarded(
  m: number,
  n: number,
  guards: number[][],
  walls: number[][]
): number {
  const matrix = [];
  const gl = guards.length;
  const wl = walls.length;
  let remaining = m * n - gl - wl;
  for (let i = 0; i < m; i++) {
    matrix.push(Array.from({ length: n }).fill(0));
  }
  for (let i = 0; i < wl; i++) {
    let w = walls[i];
    matrix[w[0]][w[1]] = "w";
  }
  for (let i = 0; i < gl; i++) {
    let g = guards[i];
    matrix[g[0]][g[1]] = "g";
  }
  for (let i = 0; i < 4; i++) {
    for (let g = 0; g < gl; g++) {
      let gp = guards[g];
      let pt = 0;
      let total = 0;
      if (i === 0 && gp[0] > 0) {
        //North
        pt = gp[0] - 1;
        while (pt >= 0) {
          if (matrix[pt][gp[1]] == "w" || matrix[pt][gp[1]] == "g") {
            break;
          } else if (matrix[pt][gp[1]] == 0) {
            total++;
            matrix[pt][gp[1]] = 1;
          }
          pt--;
        }
      } else if (i === 3 && gp[1] > 0) {
        //West
        pt = gp[1] - 1; // start left of row location of guard
        while (pt >= 0) {
          if (matrix[gp[0]][pt] == "w" || matrix[gp[0]][pt] == "g") {
            break;
          } else if (matrix[gp[0]][pt] == 0) {
            total++;
            matrix[gp[0]][pt] = 1; //mark as guarded & counted
          }
          pt--;
        }
      } else if (i === 2 && gp[0] < m - 1) {
        //South
        pt = gp[0] + 1; // start below row location of guard
        while (pt < m) {
          if (matrix[pt][gp[1]] == "w" || matrix[pt][gp[1]] == "g") {
            break;
          } else if (matrix[pt][gp[1]] == 0) {
            total++;
            matrix[pt][gp[1]] = 1; //mark as guarded & counted
          }
          pt++;
        }
      } else if (i === 1 && gp[1] < n - 1) {
        //East
        pt = gp[1] + 1; // start right of row location of guard
        while (pt < n) {
          if (matrix[gp[0]][pt] == "w" || matrix[gp[0]][pt] == "g") {
            break;
          } else if (matrix[gp[0]][pt] == 0) {
            total++;
            matrix[gp[0]][pt] = 1; //mark as guarded & counted
          }
          pt++;
        }
      }
      remaining = remaining - total;
    }
  }
  return remaining;
}
