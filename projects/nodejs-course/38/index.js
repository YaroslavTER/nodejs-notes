const fs = require('fs');

// asyncronous form

/* 
  gives back a buffer if the character encoding is not specified
  to specify character encoding you can specify it in the second argument

  usually work with buffers if there are specific needs to convert
  raw data into a string
*/
fs.readFile(__filename, (error, data) => {
  if (error) {
    throw error;
  }

  // data handling
});

// syncronous form
const data = fs.readFileSync(__filename);
// exceptions throws immediately
// dara handling
