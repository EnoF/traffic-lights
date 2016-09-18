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
    this.color = COLORS.RED;
  }

  go() {
    setTimeout(() => this.color = COLORS.GREEN, 10000);
  }
}
