const cluster = require('cluster');
const os = require('os');

const dbUsersNumber = function () {
  this.count = this.count || 5;
  this.count = this.count * this.count;
  return this.count;
};

if (cluster.isMaster) {
  const cpuNumber = os.cpus().length;

  console.log(`forking for ${cpuNumber} CPUs`);
  for (let i = 0; i < cpuNumber; i++) {
    cluster.fork();
  }

  const updateWorkers = () => {
    const usersCount = dbUsersNumber();
    Object.values(cluster.workers).forEach((worker) => {
      worker.send({ usersCount });
    });
  };

  updateWorkers();
  setInterval(updateWorkers, 10000);
} else {
  require('./server');
}
