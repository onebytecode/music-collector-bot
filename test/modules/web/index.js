// TEST MODULES/WEB ROOT

module.exports = (b) => {
  const { web, chai, assert, expect } = b
  const { webRequest } = web
  const webRequestParams = { chai, assert, expect, webRequest }
  require('./web-request.test')(webRequestParams)
}
