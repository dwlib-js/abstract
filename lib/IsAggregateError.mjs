import {
  AggregateError,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} from '#primordials';

const IsAggregateError = AggregateError ? FunctionBind(FunctionPrototypeSymbolHasInstance, AggregateError) : () => false;
export default IsAggregateError;
