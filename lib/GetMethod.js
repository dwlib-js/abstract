'use strict';

const String = require('#primordials/String');
const TypeError = require('#primordials/TypeError');
const IsCallable = require('#types/isCallable');
const GetV = require('./GetV');

const GetMethod = (value, propertyKey) => {
  const method = GetV(value, propertyKey);
  if (method == null) {
    return;
  }
  if (!IsCallable(method)) {
    const name = String(propertyKey);
    throw new TypeError(`Property '${name}' is not callable`);
  }
  return method;
}

module.exports = GetMethod;
