import {
  TypeError
} from '#primordials';
import IsObject from './IsObject.mjs';

const RequireTargetObject = argument => {
  if (!IsObject(argument)) {
    throw new TypeError('Target is not an object');
  }
}
export default RequireTargetObject;
