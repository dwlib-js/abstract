import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  TypedArray
} from '#primordials';

const IsTypedArray = FunctionBind(FunctionPrototypeSymbolHasInstance, TypedArray);
export default IsTypedArray;
