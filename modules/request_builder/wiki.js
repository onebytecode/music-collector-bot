// WIKI REQUEST MODULE

module.exports = () => {
  const ruWikiEndpoint = 'https://ru.wikipedia.org/w/api.php'
  const getPage = (n) => {
    if (typeof n !== 'string' || !n) throw new Error('Name should be a string')
    const name = n
    const action = "?action=query"
    const titles = "titles=" + name.trim()
    const format = "format=json"
    const query = [action, titles, format].reduce((acc, el) => acc + '&' + el)
    const path = ruWikiEndpoint + query
    return path
  }

  const getCategories = (n) => {
    const sPage = getPage(n)
    const prop = 'prop=categories'
    const categories = sPage + '&' + prop
    return categories
  }

  const requests = {
    getPage,
    getCategories
  }

  return requests
}
