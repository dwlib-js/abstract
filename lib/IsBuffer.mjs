import {
  ArrayBufferIsView
} from '@dwlib/primordials';
import IsArrayBuffer from './IsArrayBuffer.mjs';

const IsBuffer = argument => IsArrayBuffer(argument) || ArrayBufferIsView(argument);
export default IsBuffer;
