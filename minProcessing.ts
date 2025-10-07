function minProcessingTime(processorTime: number[], tasks: number[]): number {
  const m = tasks.length;
  const n = processorTime.length;
  tasks.sort((a, b) => b - a);
  processorTime.sort((a, b) => a - b);
  let minTime = 0;
  let per = m / n;
  let pt = 0;

  for (let i = 0; i < m; i++) {
    if (i % per == 0 && i !== 0) {
      pt++;
    }

    let time = processorTime[pt] + tasks[i];

    if (minTime < time) {
      minTime = time;
    }
  }
  return minTime;
}
