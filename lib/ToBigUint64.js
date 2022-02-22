'use strict';

const {
  BigInt
} = require('@dwlib/primordials');
const BigIntModulo = require('./BigIntModulo');

let ToBigUint64;
if (BigInt) {
  const MAX = BigInt('0x10000000000000000');
  ToBigUint64 = argument => BigIntModulo(argument, MAX);
}
module.exports = ToBigUint64;
