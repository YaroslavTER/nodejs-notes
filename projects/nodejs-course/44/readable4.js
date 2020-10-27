const { Readable } = require('stream');

const inStream = new Readable({
  read(size) {
    setTimeout(() => {
      this.push(String.fromCharCode(this.currentCharCode++));

      if (this.currentCharCode > 90) {
        this.push(null);
      }
    }, 100);
  },
});

inStream.currentCharCode = 65;

inStream.pipe(process.stdout);

process.on('exit', () => {
  console.log(`\n\ncurrentCharCode is ${inStream.currentCharCode}`);
});
/* 
  fix for `node readable4.js | head -c3`
  that force the process to print only 3 letters
*/
process.stdout.on('error', process.exit);
