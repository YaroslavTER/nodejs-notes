const { Readable } = require('stream');

const inStream = new Readable({
  read(size) {
    setTimeout(() => {
      /* 
        in the video there is a race condition
        where both pushes are executed and an error
        occurs. But I don't have any error when run this
        code
      */
      this.push(String.fromCharCode(this.currentCharCode++));

      if (this.currentCharCode > 90) {
        this.push(null);
      }
    }, 100);
  },
});

inStream.currentCharCode = 65;

inStream.pipe(process.stdout);
