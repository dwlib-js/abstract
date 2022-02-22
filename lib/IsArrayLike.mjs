import IsObject from './IsObject.mjs';
import IsIndex from './IsIndex.mjs';

const IsArrayLike = argument => IsObject(argument) && IsIndex(argument.length);
export default IsArrayLike;
