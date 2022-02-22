import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  Int32Array
} from '@dwlib/primordials';

const IsInt32Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Int32Array);
export default IsInt32Array;
