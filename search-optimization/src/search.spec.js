const assert = require('assert');
const Search = require("./search");

describe('Search', function () {
  const people = [];

  before(() => {
    people.push({id: 1, name: "Jason", age: 38});
    people.push({id: 2, name: "Justin", age: 34});
    people.push({id: 3, name: "Josh", age: 33});
  });

  it('should return the correct element', function () {
    const expectedName = "Justin";
    const search = new Search(people);

    const person = search.find(2);

    assert.equal(expectedName, person.name);
  });
});
