const { fork } = require('child_process');

const forkedProcess = fork('child.js');

forkedProcess.on('message', (message) => {
  console.log(`message from child ${message}`);
});

forkedProcess.send({ qwe: 'asd' });
