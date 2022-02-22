import IsInteger from './IsInteger.mjs';

const IsInt16 = argument => IsInteger(argument) && argument >= -0x8000 && argument <= 0x7fff;
export default IsInt16;
