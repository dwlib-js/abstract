import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  Int16Array
} from '@dwlib/primordials';

const IsInt16Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Int16Array);
export default IsInt16Array;
