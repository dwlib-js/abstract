import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  RegExp
} from '@dwlib/primordials';

const IsRegExp = FunctionBind(FunctionPrototypeSymbolHasInstance, RegExp);
export default IsRegExp;
