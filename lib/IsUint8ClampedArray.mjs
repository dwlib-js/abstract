import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  Uint8ClampedArray
} from '#primordials';

const IsUint8ClampedArray = FunctionBind(FunctionPrototypeSymbolHasInstance, Uint8ClampedArray);
export default IsUint8ClampedArray;
