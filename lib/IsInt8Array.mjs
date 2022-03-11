import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  Int8Array
} from '#primordials';

const IsInt8Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Int8Array);
export default IsInt8Array;
