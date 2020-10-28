const { spawn } = require('child_process');

spawn('echo $QWE', {
  stdio: 'inherit',
  shell: true,
  env: {
    QWE: 'asd',
  },
});
