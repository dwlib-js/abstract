import {
  FunctionBind,
  GeneratorPrototype,
  ObjectPrototypeIsPrototypeOf
} from '@dwlib/primordials';

const IsGenerator = FunctionBind(ObjectPrototypeIsPrototypeOf, GeneratorPrototype);
export default IsGenerator;
