import ReflectApply from '#primordials/ReflectApply';
import GetV from './GetV.mjs';

const Invoke = (...args) => {
  const value = args[0];
  const propertyKey = args[1];
  const method = GetV(value, propertyKey);
  const argumentsList = args.length > 2 ? args[2] : [];
  return ReflectApply(method, value, argumentsList);
}

export default Invoke;
