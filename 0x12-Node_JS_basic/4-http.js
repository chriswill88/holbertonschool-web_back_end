const http = require('http');

const app = http.createServer((req, res) => {
  res.write('Hello Holberton School!');
}).listen(1245, 'localhost');

exports.app = app;