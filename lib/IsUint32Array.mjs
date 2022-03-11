import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  Uint32Array
} from '#primordials';

const IsUint32Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Uint32Array);
export default IsUint32Array;
