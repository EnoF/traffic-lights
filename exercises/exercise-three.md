# Exercise Three
When writing tests in javascript, you will inevitably run into `async` code.
In this exercise we will learn how to test with `async` behaviors.

```javascript
describe('Traffic Lights', () => {
  describe('When a car is waiting in front of a red light', () => {
    describe('And a car has been waiting for a red light for 3 seconds', () => {
      it('should still have the lights on red', () => {
        // Test implementation
      });
    });
    describe('And a car has been waiting for a red light for 10 seconds', () => {
      it('should turn the lights to green', () => {
        // Test implementation
      });
    });
  });
});
```

In this exercise we implement the test as well as the code behind it. We will
first write the test. In this test we will be expecting the code to be implemented
with `setTimeout`. We will transform the `go` function to pass the tests that
we will write.

In order to do that we will use a `setTimeout` mock.

```javascript
import sinon from 'sinon';

const timers = sinon.useFakeTimers();
```
