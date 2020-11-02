const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const cpuNumber = os.cpus().length;
  for (let i = 0; i < cpuNumber; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    /* 
      if the process is crashed and was not manually
      disconnected or killed
    */
    if (code !== 0 && !worker.exitedAfterDisconnect) {
      console.log(`worker ${worker.id} is crashed`);
      console.log('starting a new worker...');
      cluster.fork();
    }
  });
} else {
  require('../2/server');
}
