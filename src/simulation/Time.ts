export class Time {
  constructor (private tickCount: number = 0) {

  }
  public tick(): void {
    this.tickCount++;
  }

  get currentTick(): number {
    return this.tickCount;
  }

  public toJSON() {
    return { tickCount: this.tickCount };
  }

  static fromJSON(data: any): Time {
    return new Time(data.tickCount);
  }
}