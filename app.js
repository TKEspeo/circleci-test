// const http = require('http');
//
// http.createServer(function (req, res) {
//   res.write('Hello World3 - after CD!');
//   console.log('request!');
//   res.end();
// }).listen(8080, '0.0.0.0');

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hello world')
})

app.post('/', (req, res) => {
  res.send({ msg: 'hello world from post metho2d' })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app
