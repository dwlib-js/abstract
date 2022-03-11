import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  Int32Array
} from '#primordials';

const IsInt32Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Int32Array);
export default IsInt32Array;
