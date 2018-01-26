var express = require('express')
var path = require('path')
var app = express()
var proxy = require('express-http-proxy');
var cors = require('cors')
var request = require('request-promise');
var port = process.env.API_PORT || 9000

app.use(cors())


app.use('/hello', (req, res) => {
  res.end(JSON.stringify({msg: 'Hello from Server!'}))
})

app.listen(port, function () {
  console.log(`api running on port ${port}`)
})

// Serve static assets
app.use(express.static(path.resolve(__dirname, '../../build')))
