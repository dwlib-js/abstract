import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  WeakRef
} from '#primordials';

const IsWeakRef = WeakRef ? FunctionBind(FunctionPrototypeSymbolHasInstance, WeakRef) : () => false;
export default IsWeakRef;
