const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'files');

/* 
  get the files from the directory
*/
const fileList = fs.readdirSync(dirname);
const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

/* 
  loop through all of the files in the directory
*/
fileList.forEach((file) => {
  const filePath = path.join(dirname, file);
  /* 
    read stats metadata for each file
  */
  fs.stat(filePath, (error, status) => {
    if (error) {
      throw error;
    }

    /* 
      if the file was not modified in the last seven days,
      the script deletes it
    */
    if (Date.now() - status.mtime.getTime() > 7 * oneDayInMilliseconds) {
      fs.unlink(filePath, (error) => {
        if (error) {
          throw error;
        }

        console.log(`${filePath} file deleted`);
      });
    }
  });
});
