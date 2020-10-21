const fs = require('fs');
const server = require('https').createServer({
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
});

server.on('request', (req, res) => {
  res.writeHead(200, { 'content-tyoe': 'text/plain' });
  res.end('Hello World\n');
});

server.listen(443);