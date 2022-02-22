import IsInteger from './IsInteger.mjs';

const IsUint8 = argument => IsInteger(argument) && argument >= 0 && argument <= 0xff;
export default IsUint8;
