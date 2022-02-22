import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  WeakSet
} from '@dwlib/primordials';

const IsWeakSet = FunctionBind(FunctionPrototypeSymbolHasInstance, WeakSet);
export default IsWeakSet;
