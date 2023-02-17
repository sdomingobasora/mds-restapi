module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src', '<rootDir>/e2e'],
  transform: { '^.+\\.tsx?$': 'ts-jest' },
};
