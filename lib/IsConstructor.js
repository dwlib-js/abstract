'use strict';

const {
  Object,
  ReflectConstruct
} = require('#primordials');

const IsConstructor = argument => {
  try {
    ReflectConstruct(Object, [], argument);
    return true;
  } catch (e) {
    return false;
  }
}
module.exports = IsConstructor;
