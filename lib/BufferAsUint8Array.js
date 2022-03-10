'use strict';

const {
  DataViewBuffer,
  TypedArrayBuffer,
  TypeError,
  Uint8Array
} = require('@dwlib/primordials');
const IsUint8Array = require('./IsUint8Array');
const IsArrayBuffer = require('./IsArrayBuffer');
const IsTypedArray = require('./IsTypedArray');
const IsDataView = require('./IsDataView');

const BufferAsUint8Array = buffer => {
  if (IsUint8Array(buffer)) {
    return buffer;
  }
  let source;
  if (IsArrayBuffer(buffer)) {
    source = buffer;
  } else if (IsTypedArray(buffer)) {
    source = TypedArrayBuffer(buffer);
  } else if (IsDataView(buffer)) {
    source = DataViewBuffer(buffer);
  } else {
    throw new TypeError('Buffer is not an instance of ArrayBuffer or ArrayBufferView');
  }
  return new Uint8Array(source);
}
module.exports = BufferAsUint8Array;
