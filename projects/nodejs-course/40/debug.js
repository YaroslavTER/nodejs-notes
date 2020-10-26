function negativeSum(...args) {
  return args.reduce((total, arg) => {
    return total - arg;
  }, 0);
}

console.log(negativeSum(1, 2, 10));
