const HttpServer = require('./http-server');
const logger = require('./util/log/logger');

const os = require('os');
const cluster = require('cluster');

const clusterWorkerSize = os.cpus().length;

const loadServers = () => {
  if (clusterWorkerSize > 1) {
    if (cluster.isMaster) {
      
      for (let workerCount = 1; workerCount < clusterWorkerSize; workerCount++) {
        logger.info(`Loading server...`);
        cluster.fork({worker_id: workerCount});
      }

      cluster.on('exit', function(worker) {
        logger.warn(`Worker ${worker.id} has exitted.`);
        cluster.fork({worker_id: worker.id})
      });
    } else {
      (new HttpServer()).start();
      logger.info(`Server is running!`);
    }
  } else {
    (new HttpServer()).start();
    logger.info(`Server is running!`);
  }
}

module.exports = loadServers;