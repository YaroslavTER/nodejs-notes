const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const cpuNumber = os.cpus().length;

  console.log(`forking for ${cpuNumber} CPUs`);
  for (let i = 0; i < cpuNumber; i++) {
    cluster.fork();
  }

  console.dir(cluster.workers, { depth: 0 });
  Object.values(cluster.workers).forEach((worker) => {
    worker.send(`its worker ${worker.id}`);
  });
} else {
  require('./server');
}
