import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  SharedArrayBuffer
} from '@dwlib/primordials';

const IsSharedArrayBuffer = SharedArrayBuffer ? FunctionBind(FunctionPrototypeSymbolHasInstance, SharedArrayBuffer) : () => false;
export default IsSharedArrayBuffer;
