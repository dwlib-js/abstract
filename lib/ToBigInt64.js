'use strict';

const {
  BigInt
} = require('@dwlib/primordials');
const ToBigUint64 = require('./ToBigUint64');

let ToBigInt64;
if (BigInt) {
  const MIN = BigInt('0x7fffffffffffffff');
  const MAX = BigInt('0x10000000000000000');
  ToBigInt64 = argument => {
    const bigint = ToBigUint64(argument);
    return bigint > MIN ? bigint - MAX : bigint;
  }
}
module.exports = ToBigInt64;
