'use strict';

const {
  BigInt
} = require('#primordials');
const IsBigInt = require('./IsBigInt');

let IsBigInt64;
if (BigInt) {
  const MIN = -BigInt('0x8000000000000000');
  const MAX = BigInt('0x7fffffffffffffff');
  IsBigInt64 = argument => IsBigInt(argument) && argument >= MIN && argument <= MAX;
} else {
  IsBigInt64 = () => false;
}
module.exports = IsBigInt64;
