const http = require('http');

// req: htto.ClientRequest
const req = http.request({ hostname: 'www.google.com' }, (res) => {
  // res: IncomingMessage
  console.log(res.statusCode);
  console.log(res.headers);

  res.on('data', (data) => {
    console.log(data.toString());
  });
});

req.on('error', (error) => console.log(error));

// req.agent: http.Agent
req.end();
