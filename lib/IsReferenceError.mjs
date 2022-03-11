import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  ReferenceError
} from '#primordials';

const IsReferenceError = FunctionBind(FunctionPrototypeSymbolHasInstance, ReferenceError);
export default IsReferenceError;
