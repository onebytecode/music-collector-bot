// /MODULES REQUEST BUILDER TEST ROOT

module.exports = (b) => {
  const { wiki } = b
  require('./wiki.test')(wiki)
}
