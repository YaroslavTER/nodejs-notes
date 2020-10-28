const { spawn } = require('child_process');

spawn('find . -type f', {
  stdio: 'inherit',
  shell: true,
  cwd: '/home/yaroslav/Desktop/lab/nodejs',
});
