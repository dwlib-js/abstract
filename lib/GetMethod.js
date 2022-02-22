'use strict';

const {
  String,
  TypeError
} = require('@dwlib/primordials');
const GetV = require('./GetV');
const IsCallable = require('./IsCallable');

const GetMethod = (V, P) => {
  const method = GetV(V, P);
  if (method == null) {
    return;
  }
  if (!IsCallable(method)) {
    throw new TypeError(`Property '${String(P)}' is not callable`);
  }
  return method;
}
module.exports = GetMethod;
