'use strict';

const DataViewBuffer = require('#primordials/DataViewBuffer');
const TypedArrayBuffer = require('#primordials/TypedArrayBuffer');
const TypeError = require('#primordials/TypeError');
const IsArrayBuffer = require('#types/isArrayBuffer');
const IsDataView = require('#types/isDataView');
const IsTypedArray = require('#types/isTypedArray');

const ArrayBufferOfBufferSource = source => {
  let buffer;
  if (IsArrayBuffer(source)) {
    buffer = source;
  } else if (IsTypedArray(source)) {
    buffer = TypedArrayBuffer(source);
  } else if (IsDataView(source)) {
    buffer = DataViewBuffer(source);
  } else {
    throw new TypeError('source is not an instance of ArrayBuffer or ArrayBufferView');
  }
  return buffer;
}

module.exports = ArrayBufferOfBufferSource;
