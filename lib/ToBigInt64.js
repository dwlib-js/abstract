'use strict';

const BigInt = require('#primordials/BigInt');
const ToBigUint64 = require('./ToBigUint64');

const MAX = BigInt('0x10000000000000000');
const MIN = BigInt('0x7fffffffffffffff');

const ToBigInt64 = argument => {
  const bigint = ToBigUint64(argument);
  return bigint > MIN ? bigint - MAX : bigint;
}

module.exports = ToBigInt64;
