const fs = require('fs');
const zlib = require('zlib');
const { Transform } = require('stream');
const filename = process.argv[2];

const progress = new Transform({
  transform(chunk, encoding, callback) {
    process.stdout.write('.');
    callback(null, chunk);
  },
});

fs.createReadStream(filename)
  .pipe(zlib.createGzip())
  .pipe(progress)
  .pipe(fs.createWriteStream(`${filename}.gz`))
  .on('finish', () => console.log('\nDone'));
