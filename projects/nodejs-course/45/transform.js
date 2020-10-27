/* 
  its output is computed from its imput
*/
const { Transform } = require('stream');

const toUpperCase = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

process.stdin.pipe(toUpperCase).pipe(process.stdout);
