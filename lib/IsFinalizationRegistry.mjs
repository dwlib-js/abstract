import {
  FinalizationRegistry,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} from '@dwlib/primordials';

const IsFinalizationRegistry = FinalizationRegistry ? FunctionBind(FunctionPrototypeSymbolHasInstance, FinalizationRegistry) : () => false;
export default IsFinalizationRegistry;
