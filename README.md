# Traffic Lights
Traffic lights have a lot of different data sources to take in account to create an safe traffic situation.
To create a traffic lights app, it is essential to ensure that our use cases are tested.

## Setup
We use Docker to setup our environment.
We use `mocha-sinon-chai` for our unit tests and `babel` to transpile our ES6 code.
Everything will be setup with one command: `docker-compose up`

## Writing unit tests for existing code
Chances are that you'll be writing tests for code that already exists.
We'll start off simple and write some tests for the behavior of an single traffic light.

### Plain single test
Follow the exercise instructions [here](./exercises/exercise-one.md).
