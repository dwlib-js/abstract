'use strict';

const ToObject = require('./ToObject');

const GetV = (V, P) => {
  const O = ToObject(V);
  return O[P];
}
module.exports = GetV;
