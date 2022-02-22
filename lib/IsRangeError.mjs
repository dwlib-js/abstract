import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  RangeError
} from '@dwlib/primordials';

const IsRangeError = FunctionBind(FunctionPrototypeSymbolHasInstance, RangeError);
export default IsRangeError;
