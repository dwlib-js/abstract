import IsObject from './IsObject.mjs';

const IsPrimitive = argument => !IsObject(argument);
export default IsPrimitive;
