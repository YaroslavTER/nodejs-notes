const server = require('net').createServer();
let counter = 0;
let socketSet = {};

const getMessageTime = () => {
  const date = new Date();
  return `${date.getHours()}:${date.getMinutes()}`;
};

server.on('connection', (socket) => {
  socket.id = counter++;
  console.log('client is connected');
  socket.write('Please, write your name: ');

  socket.on('data', (message) => {
    if (!socketSet[socket.id]) {
      socket.name = message.toString().trim();
      socket.write(`${socket.name}, whelcome to the chat\n> `);
      socketSet[socket.id] = socket;
      return;
    }
    socket.write('>');
    Object.entries(socketSet).forEach(([key, clientSocket]) => {
      if (Number(key) === socket.id) return;
      clientSocket.write(`${socket.name} ${getMessageTime()}: ${message}`);
    });
  });

  socket.on('end', () => {
    delete socketSet[socket.id];
    console.log('client disconnected');
  });
});

server.listen(8000, () => console.log('server is running'));
