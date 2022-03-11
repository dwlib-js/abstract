import {
  DataViewBuffer,
  TypedArrayBuffer,
  TypeError,
  Uint8Array
} from '#primordials';
import IsUint8Array from './IsUint8Array.mjs';
import IsArrayBuffer from './IsArrayBuffer.mjs';
import IsTypedArray from './IsTypedArray.mjs';
import IsDataView from './IsDataView.mjs';

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
export default BufferAsUint8Array;
