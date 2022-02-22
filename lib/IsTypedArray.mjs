import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  TypedArray
} from '@dwlib/primordials';

const IsTypedArray = FunctionBind(FunctionPrototypeSymbolHasInstance, TypedArray);
export default IsTypedArray;
