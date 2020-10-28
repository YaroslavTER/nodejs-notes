const fs = require('fs');
const crypto = require('crypto');
const zlib = require('zlib');
const { Transform } = require('stream');
const filename = process.argv[2];

const algorithm = 'aes-256-cbc';
const key = '123456789012345678901234567890ab';
const iv = '1234567890asdfgh';

const progress = new Transform({
  transform(chunk, encoding, callback) {
    process.stdout.write('.');
    callback(null, chunk);
  },
});

fs.createReadStream(filename)
  .pipe(zlib.createGzip())
  .pipe(crypto.createCipheriv(algorithm, Buffer.from(key), iv))
  .pipe(progress)
  .pipe(fs.createWriteStream(`${filename}.zz`))
  .on('finish', () => console.log('\nDone'));
