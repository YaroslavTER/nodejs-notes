const { Writable } = require('stream');

/* 
  simple echo stream

  everything it reacieves, it echo back
*/
const outStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  },
});

/* 
  consume the stream

  readable stream
*/
process.stdin.pipe(outStream);
