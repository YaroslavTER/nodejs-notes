const cluster = require('cluster');
const os = require('os');

/* 
  restart the cluster
*/

if (cluster.isMaster) {
  const cpuNumber = os.cpus().length;
  for (let i = 0; i < cpuNumber; i++) {
    cluster.fork();
  }

  console.log(`master PID: ${process.pid}`);

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

  process.on('SIGUSR2', () => {
    const workerList = Object.values(cluster.workers);

    const restartWorker = (index) => {
      const worker = workerList[index];
      if (!worker) {
        return;
      }

      worker.on('exit', () => {
        if (!worker.exitedAfterDisconnect) {
          return;
        }

        console.log(`process ${worker.process.pid} exited`);
        cluster.fork().on('listening', () => {
          restartWorker(index + 1);
        });
      });

      worker.disconnect();
    };

    restartWorker(0);
  });
} else {
  require('./server');
}
