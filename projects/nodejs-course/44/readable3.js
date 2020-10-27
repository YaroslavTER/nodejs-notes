const { Readable } = require('stream');

const inStream = new Readable({
  read(size) {
    setTimeout(() => {
      /* 
        possible way to avoid race condition
        but in my way there were not any. It might
        be fixed already in the node internals
      */
      if (this.currentCharCode > 90) {
        this.push(null);

        return;
      }

      this.push(String.fromCharCode(this.currentCharCode++));
    }, 100);
  },
});

inStream.currentCharCode = 65;

inStream.pipe(process.stdout);
