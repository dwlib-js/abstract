import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  Uint8Array
} from '#primordials';

const IsUint8Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Uint8Array);
export default IsUint8Array;
