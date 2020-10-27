const { Readable } = require('stream');

const inStream = new Readable();

inStream.push('abcd');
/* 
  to indicate that the stream does not have
  anymore data
*/
inStream.push(null);

/* 
  consume the stream
*/
inStream.pipe(process.stdout);
