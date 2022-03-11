'use strict';

const {
  BigInt,
  RangeError
} = require('#primordials');
const ToBigInt = require('./ToBigInt');

let BigIntModulo;
if (BigInt) {
  const ZERO = BigInt(0);
  BigIntModulo = (x, y) => {
    const a = ToBigInt(x);
    const n = ToBigInt(y);
    if (n === ZERO) {
      throw new RangeError('Cannot divide by zero');
    }
    return ((a % n) + n) % n;
  }
}
module.exports = BigIntModulo;
