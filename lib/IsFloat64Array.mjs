import {
  Float64Array,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} from '#primordials';

const IsFloat64Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Float64Array);
export default IsFloat64Array;
