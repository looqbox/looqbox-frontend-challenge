const { defaults } = require('jest-config');

module.exports = {
  "collectCoverageFrom": [
    "src/js/helpers/calculate-age.js",
    "src/js/helpers/form-validation.js",
    "src/js/helpers/form-submit.js",
    "src/js/reducers/customers/index.js",
    "src/js/reducers/customers/action-creators.js"
  ]
};
