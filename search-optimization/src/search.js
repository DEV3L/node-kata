class Search {
  constructor(people) {
    this.people = people;
  }

  find(id) {
    for (let person of this.people) {
      if (person.id === id) {
        return person;
      }
    }
  }
}

module.exports = Search;
