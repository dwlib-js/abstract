'use strict';

const MathFloor = require('#primordials/MathFloor');
const MathRandom = require('#primordials/MathRandom');

const RandomInt = max => {
  const factor = max === undefined ? 100 : MathFloor(max);
  const random = MathRandom();
  return MathFloor(random * factor);
}

module.exports = RandomInt;
