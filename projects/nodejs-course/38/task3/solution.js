const fs = require('fs');
const path = require('path');

const dirname = path.join(__dirname, 'files');
const currentFileList = fs.readdirSync(dirname);

const log = (message) => console.log(`${new Date().toUTCString()}: ${message}`);

fs.watch(dirname, (eventType, filename) => {
  /* 
    both add and delete events are reported
    under the `watch` as renamve event type
  */
  if (eventType === 'rename') {
    const index = currentFileList.indexOf(filename);

    /* 
      if the file already exists in the directory
      it means that it's remove event
    */
    if (index >= 0) {
      /* 
        update file list to remove removed file
      */
      currentFileList.splice(index, 1);
      log(`${filename} was removed`);
      return;
    }

    /* 
      if the script gets to this point
      it means that file was added
    */
    currentFileList.push(filename);
    log(`${filename} was added`);
    return;
  }

  /* 
    if the event type is not rename it means that
    it's changed event
  */
  log(`${filename} was changed`);
});
