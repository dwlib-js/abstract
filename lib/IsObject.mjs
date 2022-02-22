import IsObjectOrNull from './IsObjectOrNull.mjs';

const IsObject = argument => argument != null && IsObjectOrNull(argument);
export default IsObject;
