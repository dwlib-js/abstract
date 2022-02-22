import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  WeakMap
} from '@dwlib/primordials';

const IsWeakMap = FunctionBind(FunctionPrototypeSymbolHasInstance, WeakMap);
export default IsWeakMap;
