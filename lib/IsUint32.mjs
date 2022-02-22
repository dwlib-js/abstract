import IsInteger from './IsInteger.mjs';

const IsUint32 = argument => IsInteger(argument) && argument >= 0 && argument <= 0xffffffff;
export default IsUint32;
