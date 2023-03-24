module.exports = {
  // "preset": "ts-jest",
  // "testEnvironment": "node",
  // "transform": {
  //   "node_modules/variables/.+\\.(j|t)sx?$": "ts-jest"
  // },
  // "transformIgnorePatterns": [
  //   "node_modules/(?!variables/.*)"
  // ]
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testRegex: '(/tests/.*|(\\.|/)(test))\\.(ts)$',
  moduleFileExtensions: ['ts', 'js'],
};
