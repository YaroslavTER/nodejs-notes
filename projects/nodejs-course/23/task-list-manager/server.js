const EventEmitter = require('events');

class Server extends EventEmitter {
  commandList = ['help', 'add', 'ls', 'delete'];
  taskSet = {};
  taskId = 1;

  constructor(client) {
    super();

    process.nextTick(() => {
      this.emitResponseWithText('Type a command (help to list commands).');
    });

    client.on('command', (inputCommand, args) => {
      if (this.commandList.some(command => command === inputCommand)) {
        this[inputCommand](args);
      } else {
        this.emitResponseWithText('Unknown command.');
      }
    })
  }

  help() {
    this.emitResponseWithText(`
    Available Commands:
      'add' task :string
      'ls'
      'delete' id :number
    `);
  }

  add(args) {
    this.taskSet[this.taskId] = args.join(' ');
    this.emitResponseWithText(`Added task ${this.taskId}`);
    this.taskId++;
  }

  ls() {
    this.emitResponseWithText(`Task list: \n${this.takSetToString()}`);
  }

  takSetToString() {
    return Object.keys(this.taskSet).map(key =>
      `${key}: ${this.taskSet[key]}`
    ).join('\n');
  }

  delete(args) {
    delete this.taskSet[args[0]];
    this.emitResponseWithText(`Deleted task ${args[0]}.`);
  }

  emitResponseWithText(line) {
    this.emit('respose', line);
  }
}

module.exports = client => new Server(client);