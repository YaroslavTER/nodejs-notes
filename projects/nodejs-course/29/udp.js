const dgram = require('dgram');
const config = require('./config');
require('./client');
const { PORT, HOST } = config;

const server = dgram.createSocket('udp4');

server.on('listening', () => console.log('UDP server listening'));

server.on('message', (message, remoteInformation) => {
  console.log(
    `${remoteInformation.address}:${remoteInformation.port} - ${message}`
  );
});

server.bind(PORT, HOST);
