import TypeError from '#primordials/TypeError';
import IsObject from '#types/isObject';

const RequireThisObject = argument => {
  if (!IsObject(argument)) {
    throw new TypeError(`'this' is not an object`);
  }
}

export default RequireThisObject;
