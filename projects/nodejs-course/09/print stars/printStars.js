const print = (number, line) => {
  const star = '*';
  console.log(star.repeat(number));
  console.log(line);
  console.log(star.repeat(number));
};

if (require.main == module) {
  //runnign as a script
  console.log(process.argv);
  print(process.argv[2], process.argv[3]);
} else {
  //being required
  module.exports = print;
}