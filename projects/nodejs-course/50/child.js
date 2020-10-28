process.on('message', (message) => {
  console.log(`message from parent: ${message}`);
});

let counter = 0;

setTimeout(() => {
  process.send({ counter: counter++ });
}, 1000);
