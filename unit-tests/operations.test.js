const operations = require('./operations');

// example of passing test
test('addition check', () => {
  expect(operations.sum(1, 2)).toBe(3);
});

// example of failing test
test('subtraction check', () => {
    expect(operations.sub(3, 1)).toBe(2);
  })