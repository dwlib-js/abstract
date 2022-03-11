'use strict';

const {
  BigInt
} = require('#primordials');
const IsBigInt = require('./IsBigInt');

let IsBigUint64;
if (BigInt) {
  const ZERO = BigInt(0);
  const MAX = BigInt('0xffffffffffffffff');
  IsBigUint64 = argument => IsBigInt(argument) && argument >= ZERO && argument <= MAX;
} else {
  IsBigUint64 = () => false;
}
module.exports = IsBigUint64;
