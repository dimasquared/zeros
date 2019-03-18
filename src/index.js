module.exports = function getZerosCount(number) {
  let zeros = 0;
  for (let i = 1; Math.pow(5,i) <= number; i++) {
    zeros = zeros + Math.floor(number/Math.pow(5,i));
  }
  return zeros;
}
