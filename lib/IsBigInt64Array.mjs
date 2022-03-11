import {
  BigInt64Array,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} from '#primordials';

const IsBigInt64Array = BigInt64Array ? FunctionBind(FunctionPrototypeSymbolHasInstance, BigInt64Array) : () => false;
export default IsBigInt64Array;
