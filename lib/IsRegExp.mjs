import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  RegExp
} from '#primordials';

const IsRegExp = FunctionBind(FunctionPrototypeSymbolHasInstance, RegExp);
export default IsRegExp;
