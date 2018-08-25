class Search {
  constructor(people) {
    // this.people = people;
    const peopleMap = [];
    people.forEach(person => peopleMap[person.id] = person);
    this.people = peopleMap
  }

  // hash map optimized
  find(id) {
    return this.people[id]
  }

  // // declarative
  // find(id) {
  //   return this.people.find(person => person.id === id);
  // }
  //
  // // imperative
  // find(id) {
  //   for (let person of this.people) {
  //     if (person.id === id) {
  //       return person;
  //     }
  //   }
  // }
}

module.exports = Search;
