const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
const Router = express.Router()
const PORT = 9000
Router.get('/test', (req, res) => {
  return res.json({code: 0})
})
app.use(cookieParser())
app.use(bodyParser.json())
app.use(Router)
app.listen(PORT, (req, res) => {
  console.log('server is over,port is ' + PORT)
})