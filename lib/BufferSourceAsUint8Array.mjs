import DataViewBuffer from '#primordials/DataViewBuffer';
import TypedArrayBuffer from '#primordials/TypedArrayBuffer';
import TypeError from '#primordials/TypeError';
import Uint8Array from '#primordials/Uint8Array';
import IsArrayBuffer from '#types/isArrayBuffer';
import IsDataView from '#types/isDataView';
import IsTypedArray from '#types/isTypedArray';
import IsUint8Array from '#types/isUint8Array';

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

export default BufferSourceAsUint8Array;
