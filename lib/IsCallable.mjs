import IsFunction from './IsFunction.mjs';
import IsClassConstructor from './IsClassConstructor.mjs';

const IsCallable = argument => IsFunction(argument) && !IsClassConstructor(argument);
export default IsCallable;
