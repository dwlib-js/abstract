import TypeError from '#primordials/TypeError';
import IsObject from '#types/isObject';

const RequireTargetObject = argument => {
  if (!IsObject(argument)) {
    throw new TypeError('target is not an object');
  }
}

export default RequireTargetObject;
