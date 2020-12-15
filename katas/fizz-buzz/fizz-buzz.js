function process(num) {
  const returnValue = [];
  if (num == 0) {
    return [0];
  }
  for (let a = 0; a < num; a++) {
    const value = a + 1;
    if (value % 3 === 0) {
      returnValue.push('fizz');
    } else {
      returnValue.push(value);
    }
  }
  return returnValue;
}

module.exports.process = process;
