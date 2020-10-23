const dgram = require('dgram');
const config = require('./config');
const { PORT, HOST } = config;

const client = dgram.createSocket('udp4');
const messageBuffer = Buffer.from('client message');

console.log(messageBuffer.length);

client.send(messageBuffer, 0, messageBuffer.length, PORT, HOST, (error) => {
  if (error) {
    throw error;
  }

  console.log('UDP message sent');
  // client.close();
});

client.send(messageBuffer, 0, 7, PORT, HOST, (error) => {
  if (error) {
    throw error;
  }

  console.log('UDP message sent');
  client.send(messageBuffer, 7, 14, PORT, HOST, (error) => {
    if (error) {
      throw error;
    }

    console.log('UDP message sent');
    client.close();
  });
});
