const path = require('path')
const express = require('express')

module.exports = {
  app: function () {
    const app = express()
    const indexPath = path.join(__dirname, './src/index.html')
    const publicPath = express.static(path.join(__dirname, './src'))

    app.use('/', publicPath)
    app.get('/', function (_, res) { res.sendFile(indexPath) })

    return app
  }
}