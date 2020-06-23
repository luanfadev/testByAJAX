const koa = require('koa')
const app = new koa()
const middleWare = require('./middleware')
const router = require('./router')

const PORT = 3000

middleWare(app)
router(app)

app.listen(PORT, () => {
  console.log('server is running at http://localhost:' + PORT)
})