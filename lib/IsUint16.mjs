import IsInteger from './IsInteger.mjs';

const IsUint16 = argument => IsInteger(argument) && argument >= 0 && argument <= 0xffff;
export default IsUint16;
