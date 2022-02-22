import IsSafeInteger from './IsSafeInteger.mjs';

const IsIndex = argument => IsSafeInteger(argument) && argument >= 0;
export default IsIndex;
