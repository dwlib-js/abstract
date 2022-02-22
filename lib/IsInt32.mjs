import IsInteger from './IsInteger.mjs';

const IsInt32 = argument => IsInteger(argument) && argument >= -0x80000000 && argument <= 0x7fffffff;
export default IsInt32;
