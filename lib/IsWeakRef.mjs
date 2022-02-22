import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  WeakRef
} from '@dwlib/primordials';

const IsWeakRef = WeakRef ? FunctionBind(FunctionPrototypeSymbolHasInstance, WeakRef) : () => false;
export default IsWeakRef;
