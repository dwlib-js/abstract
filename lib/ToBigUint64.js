'use strict';

const BigInt = require('#primordials/BigInt');
const BigIntModulo = require('./BigIntModulo');

const MAX = BigInt('0x10000000000000000');

const ToBigUint64 = argument => BigIntModulo(argument, MAX);

module.exports = ToBigUint64;
