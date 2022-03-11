import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  Set
} from '#primordials';

const IsSet = FunctionBind(FunctionPrototypeSymbolHasInstance, Set);
export default IsSet;
