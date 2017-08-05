// WIKI REQUEST MODULE

module.exports = () => {
  const ruWikiEndpoint = 'https://ru.wikipedia.org/w/api.php'
  const getBand = (name) => {
    const action = "?action=query"
    const titles = "titles=" + name.trim()
    const format = "format=json"
    const query = [action, titles, format].reduce((acc, el) => acc + '&' + el)
    const path = ruWikiEndpoint + query
    return path
  }

  const requests = {
    getBand
  }

  return requests
}
