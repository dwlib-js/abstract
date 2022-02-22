import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  Uint16Array
} from '@dwlib/primordials';

const IsUint16Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Uint16Array);
export default IsUint16Array;
