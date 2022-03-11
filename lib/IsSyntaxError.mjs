import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  SyntaxError
} from '#primordials';

const IsSyntaxError = FunctionBind(FunctionPrototypeSymbolHasInstance, SyntaxError);
export default IsSyntaxError;
