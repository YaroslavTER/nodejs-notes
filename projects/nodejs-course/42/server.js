const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  /* 
    inefficient way of reading big files

    fs.readFile('./big.file', (error, data) => {
      if (error) {
        throw error;
      }

      res.end(data);
    });
  */
  const src = fs.createReadStream('./big.file');
  src.pipe(res);
});

server.listen(8000);
