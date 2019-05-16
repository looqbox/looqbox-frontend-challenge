const { defaults } = require('jest-config')

module.exports = {
  'collectCoverageFrom': [
    'src/js/helpers/index.js',
    'src/js/reducers/searchResults/index.js',
    'src/js/reducers/searchResults/action-creators.js'
  ],
  'setupFilesAfterEnv': ['<rootDir>src/js/tests/setupTests.js']
}
