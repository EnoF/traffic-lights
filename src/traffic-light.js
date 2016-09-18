export const COLORS = {
  GREEN: 'GREEN',
  ORANGE: 'ORANGE',
  RED: 'RED'
};

export class TrafficLight {
  constructor() {
    this.color = COLORS.GREEN;
  }

  stop() {
    return this.hasTheLastCarPassed()
      .then(() => this.color = COLORS.RED);
  }

  go() {
    setTimeout(() => this.color = COLORS.GREEN, 10000);
  }

  hasTheLastCarPassed() {
    // This simulates a server call
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 0);
    });
  }
}
