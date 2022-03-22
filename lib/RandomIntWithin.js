'use strict';

const MathCeil = require('#primordials/MathCeil');
const MathFloor = require('#primordials/MathFloor');
const MathRandom = require('#primordials/MathRandom');

const RandomIntWithin = (min, max) => {
  const b = MathCeil(min);
  const a = MathFloor(max);
  const random = MathRandom();
  return MathFloor(random * (a - b)) + b;
}

module.exports = RandomIntWithin;
