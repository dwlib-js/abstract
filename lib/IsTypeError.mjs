import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  TypeError
} from '@dwlib/primordials';

const IsTypeError = FunctionBind(FunctionPrototypeSymbolHasInstance, TypeError);
export default IsTypeError;
