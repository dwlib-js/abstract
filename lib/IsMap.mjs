import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  Map
} from '@dwlib/primordials';

const IsMap = FunctionBind(FunctionPrototypeSymbolHasInstance, Map);
export default IsMap;
