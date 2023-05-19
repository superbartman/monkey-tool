import isLastDayOfMonth from '../src/utils/is-last-day-of-month';

test('test', () => {
  expect(isLastDayOfMonth('2023-05-19')).toBe(false);
  expect(isLastDayOfMonth(new Date('2023-05-31'))).toBe(true);
  expect(isLastDayOfMonth(1684483875922)).toBe(false);
});
