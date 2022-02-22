import {
  Error,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} from '@dwlib/primordials';

const IsError = FunctionBind(FunctionPrototypeSymbolHasInstance, Error);
export default IsError;
