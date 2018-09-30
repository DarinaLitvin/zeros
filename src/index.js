module.exports = function getZerosCount(number) {
  let ito2 = 0;
  let z = number;
  while (number > 0)
  {
      number = Math.floor(number / 2);
      ito2 += number;
  }

  number = z;
  let ito5 = 0;
  while (number > 0)
  {
      number = Math.floor(number / 5);
      ito5 += number;
  }

  return Math.min(ito2, ito5);
}
