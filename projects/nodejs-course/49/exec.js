const { exec } = require('child_process');

exec('find . -type f | wc -l', (error, stdout, stderror) => {
  if (error) {
    console.error(`exec errir: ${error}`);
    return;
  }

  console.log(`numnber of files ${stdout}`);
});
