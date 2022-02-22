import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  URIError
} from '@dwlib/primordials';

const IsURIError = FunctionBind(FunctionPrototypeSymbolHasInstance, URIError);
export default IsURIError;
