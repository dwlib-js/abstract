'use strict';

const {
  FunctionToString,
  StringStartsWith
} = require('@dwlib/primordials');
const IsFunction = require('./IsFunction');

const IsClassConstructor = argument => {
  try {
    const sourceText = FunctionToString(argument);
    return StringStartsWith(sourceText, 'class');
  } catch (e) {
    return false;
  }
};
module.exports = IsClassConstructor;
