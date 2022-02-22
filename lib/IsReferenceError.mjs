import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  ReferenceError
} from '@dwlib/primordials';

const IsReferenceError = FunctionBind(FunctionPrototypeSymbolHasInstance, ReferenceError);
export default IsReferenceError;
