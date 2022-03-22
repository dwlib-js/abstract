'use strict';

const ToObject = require('./ToObject');

const GetV = (value, propertyKey) => {
  const object = ToObject(value);
  return object[propertyKey];
}

module.exports = GetV;
