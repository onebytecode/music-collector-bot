// /MODULES REQUEST BUILDER TEST ROOT

module.exports = (b) => {
  const { bandsRequest } = b
  require('./bands_request.test')(bandsRequest)
}
