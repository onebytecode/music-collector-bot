// /MODULES REQUEST BUILDER ROOT

module.exports = () => {
  const wiki = require('./wiki')()
  const helpers = require('./helpers')

  const requestBuilder = {
    wiki,
    helpers
  }

  return requestBuilder
}
