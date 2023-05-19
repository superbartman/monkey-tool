import pipe from '../src/utils/pipe';

test('test', () => {
  const add = (x: number) => x + 1;
  const multiply = (x: number) => x * 2;
  const subtract = (x: number) => `${x - 3}`;

  const result = pipe(add, multiply, subtract)(1);

  expect(result).toBe('1');
});
