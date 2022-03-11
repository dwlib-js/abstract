import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  Map
} from '#primordials';

const IsMap = FunctionBind(FunctionPrototypeSymbolHasInstance, Map);
export default IsMap;
