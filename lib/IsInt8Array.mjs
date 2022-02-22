import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  Int8Array
} from '@dwlib/primordials';

const IsInt8Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Int8Array);
export default IsInt8Array;
