/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  verbose:true,
  clearMocks:true,
  collectCoverage:true,
  coverageDirectory:"coverage",
  coverageProvider:"v8",
  coveragePathIgnorePatterns:["/node_modules"],
  moduleDirectories:["node_modules","src"],
};