const tsjPreset = require('ts-jest/jest-preset');
const _ = require('lodash');

module.exports = {
  ..._.omit(tsjPreset, 'testMatch'),
  roots: ['<rootDir>', '<rootDir>/src/'],
  preset: 'react-native',
  verbose: false,
  collectCoverage: true,
  reporters: [
    'default',
    [
      'jest-sonar',
      {
        outputDirectory: 'coverage',
        outputName: 'sonar-report.xml',
      },
    ],
  ],
  setupFiles: ['<rootDir>/tests/setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-navigation|@react-native-community|victory-.*)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/*.d.ts'],
  coveragePathIgnorePatterns: ['!*.d.ts', '/node_modules/', '/src/navigation',],
  watchPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/tests/'],
  transform: {
    ...tsjPreset.transform,
    '\\.js$': 'babel-jest',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testRegex: '(\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
  testURL: 'http://localhost:8081',
  globals: {
    'ts-jest': {
      babelConfig: true,
      diagnostics: false,
      isolatedModules: true,
    },
  },
  coverageThreshold: {
    global: {
      statements: 80,
    },
  },
  setupFilesAfterEnv: [],
};
