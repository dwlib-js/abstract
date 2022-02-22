import {
  BigUint64Array,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} from '@dwlib/primordials';

const IsBigUint64Array = BigUint64Array ? FunctionBind(FunctionPrototypeSymbolHasInstance, BigUint64Array) : () => false;
export default IsBigUint64Array;
