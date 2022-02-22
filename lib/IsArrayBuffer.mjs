import {
  ArrayBuffer,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} from '@dwlib/primordials';

const IsArrayBuffer = FunctionBind(FunctionPrototypeSymbolHasInstance, ArrayBuffer);
export default IsArrayBuffer;
