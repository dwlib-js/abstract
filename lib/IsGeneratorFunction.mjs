import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  GeneratorFunction
} from '@dwlib/primordials';

const IsGeneratorFunction = FunctionBind(FunctionPrototypeSymbolHasInstance, GeneratorFunction);
export default IsGeneratorFunction;
