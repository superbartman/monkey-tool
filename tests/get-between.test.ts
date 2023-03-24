import getBetween from '../src/utils/get-between';

test('test', () => {
  expect(getBetween({
    value: 'hello beautiful world',
    startChar: 'hello',
    endChar: 'world',
  })).toBe('beautiful');
});
