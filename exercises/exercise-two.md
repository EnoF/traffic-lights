# Exercise Two
The tests can be organized within `describe` blocks. You can add as many
`describe` blocks next to each other as you'd like. As well as adding
`describe` blocks in other `describe` blocks.

```javascript
describe('Traffic Lights', () => {
  describe('When a car has been waiting for a red light for 10 seconds', () => {
    it('should turn the lights to green', () => {
      // Test implementation
    });
  });
  describe('When the green light has been on for 10 seconds', () => {
    it('should turn the lights to red', () => {
      // Test implementation
    });
  });
});
```

This results in a readable test report:

```bash
Traffic Lights
  When a car has been waiting for a red light for 10 seconds
    ✓ should turn the lights to green
  When the green light has been on for 10 seconds
    ✓ should turn the lights to red
```

Within a describe you can define the test setup within a `before`. The code
within this code block will be executed once `before` all the `it` blocks will
be asserted. `before` blocks defined in parents will be executed `before` the
`before` blocks of children.

## One instance
Initialize only one instance of `TrafficLight`.

## Setup for waiting car
Setup the test to turn green.

## Setup for turning red
Setup the test to turn red.
