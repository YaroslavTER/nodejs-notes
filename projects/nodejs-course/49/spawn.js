const { spawn } = require('child_process');

spawn('find', ['.', '-type', 'f'], {
  stdio: 'inherit',
});
