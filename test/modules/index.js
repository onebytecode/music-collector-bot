// TEST MODULES ROOT

module.exports = (modules, setup) => {
  const { web } = modules
  const { chai, assert, expect } = setup
  const webParams = { web, chai, assert, expect }
  require('./web')(webParams)
}
