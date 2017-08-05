// /MODULES REQUEST BUILDER TEST ROOT

module.exports = (b) => {
  const { wiki, helpers } = b
  require('./wiki.test')(wiki)
  require('./helpers.test')(helpers)
}
