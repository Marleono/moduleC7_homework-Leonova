const pow = require('./index.js');

test('multiply 2 3 times to equal 8', () => {
  expect(pow(2, 3)).toBe(8);
});