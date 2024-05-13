const cluster = require('cluster');
const os = require('os');
const path = require('path');
const url = require('url');
const totalCPUs = os.cpus().length;
const { AppSetting } = require('./config/app-setting');

const _dirname = path.resolve();

console.log(`total number of CPUs is: ${totalCPUs} Primary pid  = ${process.pid}`);

cluster.setupMaster({
    exec: _dirname + '/server.js'
});

for(let i = 0; i< totalCPUs; i++){
    cluster.fork();
}

cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} has been killed`);
    console.log('Start another worker');
    cluster.fork();
});
