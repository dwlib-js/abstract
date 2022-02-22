import {
  Float32Array,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} from '@dwlib/primordials';

const IsFloat32Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Float32Array);
export default IsFloat32Array;
