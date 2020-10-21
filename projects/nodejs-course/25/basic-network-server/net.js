const server = require('net').createServer();
let counter = 0;
let socketSet = {};

const clearConsole = () => process.stdout.write('\u001B[2J\u001B[0;0f');

clearConsole();

server.on('connection', socket => {
  socket.id = counter++;
  socketSet[socket.id] = socket;

  console.log('Client is connected.');
  socket.write('Welcome new client.\n');

  socket.on('data', data => {
    Object.entries(socketSet).forEach(([, clientSocket]) => {
      clientSocket.write(`${socket.id}: `);
      clientSocket.write(data);
    });
  })

  socket.on('end', () => {
    console.log('Client disconnected.');
  });
});

server.listen(8000, () => console.log('Server bound.'))