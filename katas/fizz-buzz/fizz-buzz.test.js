var _ = require('underscore');

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
Fake it till you make it
*/

/*
# ZOMBIES
Z - Zero                          
O - One                           
M - Many
B - Boundary Behavior
I - Interface Definition          
E - Exercise Exception Behavior
S - Simple
*/

/*
PROBLEM REQUIREMENTS:
- For multiples of three print “Fizz” instead of the number
- For the multiples of five print “Buzz”. 
- For numbers which are multiples of both three and five print “FizzBuzz“.
**Upper bound**: 15
**Example output**: ['1', '2', 'Fizz', '4', 'Buzz', '6', '7', '8', '9', '10', '11', '12', '13', '14', 'FizzBuzz']
*/

const assert = require('assert');
const fizzBuzz = require('./fizz-buzz');

// test suite
describe('Fizz Buzz', function() {
  // individual test
  it('Z#1 should take one integer argument', function() {
    // arrange
    const expected = [0];

    // act
    const result = fizzBuzz.process(0);

    // assert
    assert.equal(expected[0], result[0]);
  });

  it('O#1 should take one and return one', function() {
    // arrange
    const expected = [1];

    // act
    const result = fizzBuzz.process(1);

    // assert
    assert.equal(expected[1], result[1]);
  });

  it('M# should take two and return an array of one two', function() {
    // arrange
    const expected = [1, 2];

    // act
    const result = fizzBuzz.process(2);

    // assert
    assert.equal(expected[0], result[0]);
    assert.equal(expected[1], result[1]);
  });

  it('B# should take three and return an array of one two fizz', function() {
    // arrange
    const expected = [1, 2, 'fizz', 3, 4, 5, 'fizz', 7, 8, 'fizz'];

    // act
    const result = fizzBuzz.process(9);

    // assert
    _.range(3).forEach(n => {
      assert.equal(expected[n], result[n]);
    });
  });
});
