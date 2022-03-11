import {
  DataView,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} from '#primordials';

const IsDataView = FunctionBind(FunctionPrototypeSymbolHasInstance, DataView);
export default IsDataView;
