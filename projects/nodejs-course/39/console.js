const fs = require('fs');
const out = fs.createWriteStream('./out.log');
const error = fs.createWriteStream('./error.log');
const { Console } = console;

const customWriter = new Console(out, error);

customWriter.log(new Date());
customWriter.error(new Error('Error message.'));
