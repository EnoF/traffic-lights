import { expect } from 'chai';
import { TrafficLight, COLORS } from '../src/traffic-light';

describe('Traffic Lights', () => {
  before(() => {
    // Instantiate a single instance of TrafficLight
  });

  describe('When a car has been waiting for a red light for 10 seconds', () => {
    before(() => {
      // Move the setup code here
    });

    it('should turn the traffic lights to green', () => {
      const trafficLight = new TrafficLight();
      // Implement the test to check if the function `go`, sets the color to `GREEN`.
      // Implement your test here
      trafficLight.color = COLORS.RED;
      trafficLight.go();
      expect(trafficLight.color).to.equal(COLORS.GREEN);
    });
  });

  describe('When the green light has been on for 10 seconds', () => {
    before(() => {
      // Move the setup code here
    });

    it('should turn the traffic lights to red', () => {
      const trafficLight = new TrafficLight();
      // Implement the test to check if the function `stop`, sets the color to `RED`.
      // Implement your test here
      trafficLight.stop();
      expect(trafficLight.color).to.equal(COLORS.RED);
    });
  });
});
