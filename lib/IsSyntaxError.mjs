import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  SyntaxError
} from '@dwlib/primordials';

const IsSyntaxError = FunctionBind(FunctionPrototypeSymbolHasInstance, SyntaxError);
export default IsSyntaxError;
