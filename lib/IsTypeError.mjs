import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  TypeError
} from '#primordials';

const IsTypeError = FunctionBind(FunctionPrototypeSymbolHasInstance, TypeError);
export default IsTypeError;
