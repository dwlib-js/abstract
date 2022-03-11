import {
  Object,
  TypeError
} from '#primordials';

const ToObject = argument => {
  if (argument == null) {
    throw new TypeError(`Cannot convert ${argument} to object`);
  }
  return Object(argument);
}
export default ToObject;
