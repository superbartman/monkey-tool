import toLocaleString from '../src/utils/to-locale-string';

test('test', () => {
  expect(toLocaleString({
    value: '1',
  })).toBe('1.00');
});
