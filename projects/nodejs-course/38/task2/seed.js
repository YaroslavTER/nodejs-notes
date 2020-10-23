const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'files');

/* 
  this script is for populating the newly created directory
  with the files
*/

/* 
  firstly needed to be created destination directory
  to work with.
*/
fs.mkdirSync(dirname);
const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

/* 
  create 10 sample files with the for loop
*/
for (let i = 0; i < 10; i++) {
  const filePath = path.join(dirname, `files${i}`);
  /* 
    asyncronously create file
  */
  fs.writeFile(filePath, i, (error) => {
    if (error) {
      throw error;
    }

    const time = (Date.now() - i * oneDayInMilliseconds) / 1000;
    /* 
      for each created file applies timestamp
      first time arument is access time
      the second one is modifying time
      these arguments expect the UNIX timestamp in seconds
    */
    fs.utimes(filePath, time, time, (error) => {
      if (error) {
        throw error;
      }
    });
  });
}
