'use strict';

const DataViewBuffer = require('#primordials/DataViewBuffer');
const TypedArrayBuffer = require('#primordials/TypedArrayBuffer');
const TypeError = require('#primordials/TypeError');
const Uint8Array = require('#primordials/Uint8Array');
const IsArrayBuffer = require('#types/isArrayBuffer');
const IsDataView = require('#types/isDataView');
const IsTypedArray = require('#types/isTypedArray');
const IsUint8Array = require('#types/isUint8Array');

const BufferSourceAsUint8Array = source => {
  if (IsUint8Array(source)) {
    return source;
  }
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
  return new Uint8Array(buffer);
}

module.exports = BufferSourceAsUint8Array;
