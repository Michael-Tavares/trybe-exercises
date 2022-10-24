const sub = (a, b) => a - b;

test('subtração de dois valores', () => {
  expect(sub(5, 1)).toBe(4);
});