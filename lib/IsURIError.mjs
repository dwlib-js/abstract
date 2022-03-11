import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  URIError
} from '#primordials';

const IsURIError = FunctionBind(FunctionPrototypeSymbolHasInstance, URIError);
export default IsURIError;
