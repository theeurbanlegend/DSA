class Robot {
  private location: number[] = [];
  private direction: string = "East";
  private maxX = 0;
  private maxY = 0;
  private perimeter = 0;
  private stepsTaken = 0;
  constructor(width: number, height: number) {
    this.direction = "East";
    this.location = [0, 0];
    this.maxX = width - 1;
    this.maxY = height - 1;
    this.perimeter = 2 * (this.maxX + this.maxY);
  }

  step(num: number): void {
    this.stepsTaken = this.stepsTaken + num;
    this.moveInSequence(this.stepsTaken);
  }

  getPos(): number[] {
    return this.location;
  }

  getDir(): string {
    return this.direction;
  }

  private moveInSequence(steps: number): void {
    let remaining = steps % this.perimeter;
    if (steps !== 0 && remaining === 0) {
      remaining = this.perimeter;
    }

    if (remaining <= this.maxX) {
      this.direction = "East";
      this.location[0] = remaining;
      this.location[1] = 0;
    } else if (remaining <= this.maxX + this.maxY) {
      this.direction = "North";
      this.location[0] = this.maxX;
      this.location[1] = remaining - this.maxX;
    } else if (remaining <= 2 * this.maxX + this.maxY) {
      this.direction = "West";
      this.location[0] = this.maxX - (remaining - (this.maxX + this.maxY));
      this.location[1] = this.maxY;
    } else {
      this.direction = "South";
      this.location[0] = 0;
      this.location[1] = this.maxY - (remaining - (2 * this.maxX + this.maxY));
    }
  }
}

/**
 * Your Robot object will be instantiated and called as such:
 * var obj = new Robot(width, height)
 * obj.step(num)
 * var param_2 = obj.getPos()
 * var param_3 = obj.getDir()
 */
