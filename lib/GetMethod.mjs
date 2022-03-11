import {
  String,
  TypeError
} from '#primordials';
import GetV from './GetV.mjs';
import IsCallable from './IsCallable.mjs';

const GetMethod = (V, P) => {
  const method = GetV(V, P);
  if (method == null) {
    return;
  }
  if (!IsCallable(method)) {
    throw new TypeError(`Property '${String(P)}' is not callable`);
  }
  return method;
}
export default GetMethod;
