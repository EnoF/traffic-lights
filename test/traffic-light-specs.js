import { expect } from 'chai';
import sinon from 'sinon';
import { TrafficLight, COLORS } from '../src/traffic-light';

describe('Traffic Lights', () => {
  let trafficLight;

  before(() => {
    // Instantiate a single instance of TrafficLight
    trafficLight = new TrafficLight();
  });

  describe('When a car is waiting in front of a red light', () => {
    describe('And a car has been waiting for a red light for 3 seconds', () => {
      let timers;

      before(() => {
        // Move the setup code here
        timers = sinon.useFakeTimers();
        trafficLight.color = COLORS.RED;
        trafficLight.go();
        timers.tick(3000);
      });

      after(() => timers.restore());

      it('should still have the lights on red', () => {
        expect(trafficLight.color).to.equal(COLORS.RED);
      });
    });
    describe('And a car has been waiting for a red light for 10 seconds', () => {
      let timers;

      before(() => {
        // Move the setup code here
        timers = sinon.useFakeTimers();
        trafficLight.color = COLORS.RED;
        trafficLight.go();
        timers.tick(10000);
      });

      after(() => timers.restore());

      it('should turn the traffic lights to green', () => {
        expect(trafficLight.color).to.equal(COLORS.GREEN);
      });
    });
  });

  describe('When turning the traffic lights to `RED`', () => {
    describe('And the last car has passed', () => {
      before(() => {
        trafficLight.color = COLORS.GREEN;
        return trafficLight.stop();
      });

      it('should turn the traffic light to `RED`', () => {
        expect(trafficLight.color).to.equal(COLORS.RED);
      });
    });
  });
});
