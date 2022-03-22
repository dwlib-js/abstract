'use strict';

const ToNumber = require('./ToNumber');

const Modulo = (x, y) => {
  const a = ToNumber(x);
  const n = ToNumber(y);
  return ((a % n) + n) % n;
}

module.exports = Modulo;
