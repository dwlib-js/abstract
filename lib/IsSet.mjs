import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  Set
} from '@dwlib/primordials';

const IsSet = FunctionBind(FunctionPrototypeSymbolHasInstance, Set);
export default IsSet;
