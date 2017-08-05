// /MODULES REQUEST BUILDER ROOT

module.exports = () => {
  const wiki = require('./wiki')()

  const requestBuilder = {
    wiki
  }

  return requestBuilder
}
