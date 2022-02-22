import {
  AggregateError,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} from '@dwlib/primordials';

const IsAggregateError = AggregateError ? FunctionBind(FunctionPrototypeSymbolHasInstance, AggregateError) : () => false;
export default IsAggregateError;
