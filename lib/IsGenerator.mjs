import {
  FunctionBind,
  GeneratorPrototype,
  ObjectPrototypeIsPrototypeOf
} from '#primordials';

const IsGenerator = FunctionBind(ObjectPrototypeIsPrototypeOf, GeneratorPrototype);
export default IsGenerator;
