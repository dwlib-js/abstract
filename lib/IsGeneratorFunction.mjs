import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  GeneratorFunction
} from '#primordials';

const IsGeneratorFunction = FunctionBind(FunctionPrototypeSymbolHasInstance, GeneratorFunction);
export default IsGeneratorFunction;
