import {
  Date,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} from '#primordials';

const IsDate = FunctionBind(FunctionPrototypeSymbolHasInstance, Date);
export default IsDate;
