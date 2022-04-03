import DataViewBuffer from '#primordials/DataViewBuffer';
import TypedArrayBuffer from '#primordials/TypedArrayBuffer';
import TypeError from '#primordials/TypeError';
import IsArrayBuffer from '#types/isArrayBuffer';
import IsDataView from '#types/isDataView';
import IsTypedArray from '#types/isTypedArray';

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

export default ArrayBufferOfBufferSource;
