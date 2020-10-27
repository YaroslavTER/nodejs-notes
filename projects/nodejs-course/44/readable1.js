/* 
  the better way of the implementation
  of the idea from the previous file

  pushing the data on demand when
  the consumer asks to read it
*/
const { Readable } = require('stream');

const inStream = new Readable({
  read(size) {
    this.push(String.fromCharCode(this.currentCharCode++));

    /* 
      90 is char code of letter z
    */
    if (this.currentCharCode > 90) {
      this.push(null);
    }
  },
});

inStream.currentCharCode = 65;

inStream.pipe(process.stdout);
