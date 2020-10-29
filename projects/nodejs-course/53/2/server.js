const http = require('http');
const pid = process.pid;

let usersCount;

const simulateCPU = () => {
  for (let i = 0; i < 1e7; i++);
};

http
  .createServer((req, res) => {
    simulateCPU();
    res.write(`handled by process ${pid}\n`);
    res.end(`users count: ${usersCount}`);
  })
  .listen(8080, () => {
    console.log(`started process ${pid}`);
  });

process.on('message', ({ usersCount: inputUsersCount }) => {
  usersCount = inputUsersCount;
});
