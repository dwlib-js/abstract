import {
  FinalizationRegistry,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} from '#primordials';

const IsFinalizationRegistry = FinalizationRegistry ? FunctionBind(FunctionPrototypeSymbolHasInstance, FinalizationRegistry) : () => false;
export default IsFinalizationRegistry;
