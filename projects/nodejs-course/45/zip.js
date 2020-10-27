const fs = require('fs');
const zlib = require('zlib');
const filename = process.argv[2];

fs.createReadStream(filename)
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream(`${filename}.gz`));
