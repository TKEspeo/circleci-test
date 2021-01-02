const http = require('http');

http.createServer(function (req, res) {
  res.write('Hello World2 - after CD!');
  console.log('request!');
  res.end();
}).listen(8080, '0.0.0.0');
