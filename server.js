const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')

const routes = require('./routes.json')

const middlewares = jsonServer.defaults()

router.render = (_, res) => {
  res.jsonp({
    code: 200,
    msg: '操作成功',
    success: true,
    data: res.locals.data
  })
}

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use(jsonServer.rewriter(routes))
server.use(router)

server.listen(9911, () => {
  console.log('mock server is running on port 9911')
})
