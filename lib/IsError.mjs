import {
  Error,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} from '#primordials';

const IsError = FunctionBind(FunctionPrototypeSymbolHasInstance, Error);
export default IsError;
