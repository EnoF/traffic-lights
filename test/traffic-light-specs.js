import { expect } from 'chai';
import { TrafficLight, COLORS } from '../src/traffic-light';

describe('Traffic Lights', () => {
  let trafficLight;

  before(() => {
    // Instantiate a single instance of TrafficLight
    trafficLight = new TrafficLight();
  });

  describe('When a car has been waiting for a red light for 10 seconds', () => {
    before(() => {
      // Move the setup code here
      trafficLight.color = COLORS.RED;
      trafficLight.go();
    });

    it('should turn the traffic lights to green', () => {
      expect(trafficLight.color).to.equal(COLORS.GREEN);
    });
  });

  describe('When the green light has been on for 10 seconds', () => {
    before(() => {
      // Move the setup code here
      trafficLight.stop();
    });

    it('should turn the traffic lights to red', () => {
      expect(trafficLight.color).to.equal(COLORS.RED);
    });
  });
});
