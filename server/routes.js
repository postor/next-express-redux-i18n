import nextRoutes from 'next-routes'

const routes = nextRoutes()

routes
  .add('index', '/')
  .add('about', '/about')

export default routes