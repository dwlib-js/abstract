import String from '#primordials/String';
import TypeError from '#primordials/TypeError';
import IsCallable from '#types/isCallable';
import GetV from './GetV.mjs';

const GetMethod = (value, propertyKey) => {
  const method = GetV(value, propertyKey);
  if (method == null) {
    return;
  }
  if (!IsCallable(method)) {
    const name = String(propertyKey);
    throw new TypeError(`Property '${name}' is not callable`);
  }
  return method;
}

export default GetMethod;
