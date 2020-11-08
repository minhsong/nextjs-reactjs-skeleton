const routes = require('next-routes')
module.exports = routes()
  // wagtail catchall
  .add({
    name: 'index',
    pattern: '/',
    page: 'index'
  })
