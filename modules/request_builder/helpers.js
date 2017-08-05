// REQUEST BUILDER HELPERS

String.prototype.upperHigh = function() {
  const mArr = this.split('')
  const fHigh = mArr[0].toUpperCase()
  const a = mArr.slice(1, mArr.length).join('')
  const b = fHigh + a
  return b
}

const normalizeName = (name) => {
  const nArr = name.split(/\s/)
  if (nArr.length === 1) return name.upperHigh()
  return nArr.reduce((acc, el) => acc.upperHigh() + '_' + el.upperHigh())
}
const normalize = ({ type, el }) => {
  if (typeof el !== 'string' || !el) throw new Error('Normalize require string to proceed')
  if (type === 'name') return normalizeName(el)
}

module.exports = { normalizeName, normalize }
