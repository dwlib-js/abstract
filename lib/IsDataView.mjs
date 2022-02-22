import {
  DataView,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} from '@dwlib/primordials';

const IsDataView = FunctionBind(FunctionPrototypeSymbolHasInstance, DataView);
export default IsDataView;
