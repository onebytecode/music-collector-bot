// /MODULES REQUEST BUILDER ROOT

module.exports = () => {
  const bandsRequest = require('./bands_request')()

  const requestBuilder = {
    bandsRequest
  }

  return requestBuilder
}
