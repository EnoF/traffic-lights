import { expect } from 'chai';
import { TrafficLight, COLORS } from '../src/traffic-light';

describe('Traffic Lights', () => {
  it('should turn the traffic lights to green', () => {
    const trafficLight = new TrafficLight();
    // Implement the test to check if the function `go`, sets the color to `GREEN`.
    // Implement your test here
    trafficLight.color = COLORS.RED;
    trafficLight.go();
    expect(trafficLight.color).to.equal(COLORS.GREEN);
  });

  it('should turn the traffic lights to red', () => {
    const trafficLight = new TrafficLight();
    // Implement the test to check if the function `stop`, sets the color to `RED`.
    // Implement your test here
    trafficLight.stop();
    expect(trafficLight.color).to.equal(COLORS.RED);
  });
});
