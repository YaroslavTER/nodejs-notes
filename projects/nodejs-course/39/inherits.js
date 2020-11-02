const util = require('util');
const EventEmitter = require('events');

/* the old way */

function CustomEmitter() {}

util.inherits(CustomEmitter, EventEmitter);

CustomEmitter.prototype.write = function (data) {
  this.emit('data', data);
};

/*  */

/* the new way */

class CustomEmitter extends EventEmitter {
  constructor() {
    super();
  }

  write(data) {
    this.emit('data', data);
  }
}

/*  */

const stream = new CustomEmitter();
