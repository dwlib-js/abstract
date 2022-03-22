'use strict';

const BigInt = require('#primordials/BigInt');
const RangeError = require('#primordials/RangeError');
const ToBigInt = require('./ToBigInt');

const ZERO = BigInt(0);

const BigIntModulo = (x, y) => {
  const a = ToBigInt(x);
  const n = ToBigInt(y);
  if (n === ZERO) {
    throw new RangeError('Cannot divide by zero');
  }
  return ((a % n) + n) % n;
}

module.exports = BigIntModulo;
