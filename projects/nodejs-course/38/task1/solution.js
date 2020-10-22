const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'files');

const files = fs.readdirSync(dirname);

files.forEach((file) => {
  const filePath = path.join(dirname, file);
  /* 
    don't use string concatanation for file paths
    always use `path.join` to make the code platform
    agnostic
  */
  fs.stat(filePath, (error, stats) => {
    /* 
      gives meta information about the file including it's size
    */
    /* 
      the functions are asyncronous here because it multipule files
      needed to be process
    */
    if (error) {
      throw error;
    }

    fs.truncate(filePath, stats.size / 2, (error) => {
      if (error) {
        throw error;
      }
    });
  });
});
