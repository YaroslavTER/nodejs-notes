const { spawn } = require('child_process');

const child = spawn('node', ['timer.js'], {
  stdio: 'ignore',
  detached: true,
});

child.unref();
