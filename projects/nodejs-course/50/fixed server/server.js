const http = require('http');
const fork = require('child_process');

const server = http.createServer();

/* 
  the server does not work as expected
  from the example
*/
server.on('request', (req, res) => {
  console.log(req.url);
  if (req.url === '/compute') {
    const compute = fork('compute.js');
    compute.send('start');
    compute.on('message', (sum) => {
      res.end(`the sum is ${sum}`);
    });
  } else {
    res.end('ok');
  }
});

server.listen(3000);
