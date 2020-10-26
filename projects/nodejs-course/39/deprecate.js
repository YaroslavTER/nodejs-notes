const util = require('util');

module.exports.puts = util.deprecate(() => {
  const length = arguments.length;
  for (let i = 0; i < length; i++) {
    process.stdout.write(`${arguments[i]}\n`);
  }
}, 'puts: Use console.log instead');
