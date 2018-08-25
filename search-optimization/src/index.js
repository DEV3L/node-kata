const Search = require("./search");

const testIterations = 1000;

function testPerformance(searchId) {
  const totalStart = new Date();

  const items = [];

  for (let i = 1; i <= searchId; i++) {
    items.push({id: i})
  }

  const searchSmall = new Search(items);

  const timings = [];
  for (let i = 0; i < testIterations; i++) {
    const start = new Date();
    searchSmall.find(searchId);
    const stop = new Date();
    timings.push(stop - start);
  }

  const totalStop = new Date();

  const timingsSum = timings.reduce((total, current) => total + current, 0);

  console.log(`Average time for find for ${searchId} records: ${timingsSum / testIterations} ms`);
  console.log(`Total time for find for ${searchId} records: ${totalStop - totalStart} ms`);
}

const smallId = 3;
const largeId = 1000000;

testPerformance(smallId);
testPerformance(largeId);
