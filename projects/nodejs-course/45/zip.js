const fs = require('fs');
const zlib = require('zlib');
const filename = process.argv[2];

fs.createReadStream(filename)
  .pipe(zlib.createGzip())
  .on('data', () => process.stdout.write('.'))
  .pipe(fs.createWriteStream(`${filename}.gz`))
  .on('finish', () => console.log('\nDone'));
