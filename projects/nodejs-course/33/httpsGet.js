const https = require('https');

const req = https.get('https://www.google.com', (res) => {
  console.log(res.statusCode);
  console.log(res.headers);

  res.on('data', (data) => {
    console.log(data.toString());
  });
});

req.on('error', (error) => console.log(error));

console.log(req.agent);
