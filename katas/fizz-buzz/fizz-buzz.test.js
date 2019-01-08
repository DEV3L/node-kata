/*
- For multiples of three print “Fizz” instead of the number
- For the multiples of five print “Buzz”. 
- For numbers which are multiples of both three and five print “FizzBuzz“.
**Upper bound**: 15
**Example output**: ['1', '2', 'Fizz', '4', 'Buzz', '6', '7', '8', '9', '10', '11', '12', '13', '14', 'FizzBuzz']
*/

/*
# Three Laws of Test Driven Development
- You are not allowed to write any production code unless it is to make a failing unit test pass.
- You are not allowed to write any more of a unit test than is sufficient to fail; and compilation failures are failures.
- You are not allowed to write any more production code than is sufficient to pass the one failing unit test.
*/

/*
S - Single Responsibility Principle
O - Open / Closed => Open for extension, closed for modification
L - Liskov Substitution => shape.area :: rectangle.area : square.area : circle.area
I - Interface Segregation
D - Dependency Inversion
*/

/*
D - Don't
R - Repeat
Y - Yourself
*/

/*
# ZOMBIES
Z - Zero
O - One
M - Many
B - Boundary Behavior
I - Interface Definition          #1
E - Exercise Exception Behavior
S - Simple
*/

const assert = require('assert');
const fizzBuzz = require('./fizz-buzz');

// test suite
describe('Fizz Buzz', function() {
  // individual test
  it('should take one integer argument', function() {
    fizzBuzz.fizzle(3);
  });

  it('should return a list equal to [1] for 1', function() {
    const expectedOutput = [1];
    const output = fizzBuzz.fizzle(1);

    assert.equal(expectedOutput, output);
  });
});
