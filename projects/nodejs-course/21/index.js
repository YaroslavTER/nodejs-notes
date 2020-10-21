const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('start', (number, line) => {
  console.log(`started ${number} ${line}`);
})

eventEmitter.emit('start', 1, 'qwerty');