import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  SharedArrayBuffer
} from '#primordials';

const IsSharedArrayBuffer = SharedArrayBuffer ? FunctionBind(FunctionPrototypeSymbolHasInstance, SharedArrayBuffer) : () => false;
export default IsSharedArrayBuffer;
