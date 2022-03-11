import {
  ArrayBuffer,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} from '#primordials';

const IsArrayBuffer = FunctionBind(FunctionPrototypeSymbolHasInstance, ArrayBuffer);
export default IsArrayBuffer;
