import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  RangeError
} from '#primordials';

const IsRangeError = FunctionBind(FunctionPrototypeSymbolHasInstance, RangeError);
export default IsRangeError;
