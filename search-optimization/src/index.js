const Search = require("./search");

const testIterations = 100;

const smallId = 3;
const largeId = 1000000;

// small data set
const itemsSmall = [];
for (let i = 1; i <= smallId; i++) {
  itemsSmall.push({id: i})
}
const searchSmall = new Search(itemsSmall);

const timingsSmall = [];
for (let i = 0; i < testIterations; i++) {
  const start = new Date();
  searchSmall.find(smallId);
  const stop = new Date();
  timingsSmall.push(stop - start);
}

const timingsSumSmall = timingsSmall.reduce((total, current) => total + current, 0);
console.log(`Average time for small search: ${timingsSumSmall / testIterations}`);


// large data set
const itemsLarge = [];
for (let i = 1; i <= largeId; i++) {
  itemsLarge.push({id: i})
}
const searchLarge = new Search(itemsLarge);

const timingsLarge = [];
for (let i = 1; i < testIterations; i++) {
  const start = new Date();
  searchLarge.find(largeId);
  const stop = new Date();
  timingsLarge.push(stop - start);
}

const largeTimingsSum = timingsLarge.reduce((total, current) => total + current, 0);
console.log(`Average time for large search: ${largeTimingsSum / testIterations}`);
