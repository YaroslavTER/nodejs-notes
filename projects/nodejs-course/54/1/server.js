const http = require('http');
const pid = process.pid;

const simulateCPU = () => {
  for (let i = 0; i < 1e7; i++);
};

http
  .createServer((req, res) => {
    simulateCPU();
    res.end(`handled by process ${pid}`);
  })
  .listen(8080, () => {
    console.log(`start process ${pid}`);
  });

/* random crash */
setTimeout(() => {
  process.exit(1);
}, Math.random() * 10000);
