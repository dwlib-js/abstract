import {
  Date,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} from '@dwlib/primordials';

const IsDate = FunctionBind(FunctionPrototypeSymbolHasInstance, Date);
export default IsDate;
