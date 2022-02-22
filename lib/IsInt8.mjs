import IsInteger from './IsInteger.mjs';

const IsInt8 = argument => IsInteger(argument) && argument >= -0x80 && argument <= 0x7f;
export default IsInt8;
