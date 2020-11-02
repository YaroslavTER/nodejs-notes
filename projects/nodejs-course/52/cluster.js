const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const cpuNumber = os.cpus().length;

  console.log(`forking for ${cpuNumber} CPUs`);

  for (let i = 0; i < cpuNumber; i++) {
    cluster.fork();
  }
} else {
  require('./server');
}
