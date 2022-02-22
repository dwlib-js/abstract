import {
  Object,
  TypeError
} from '@dwlib/primordials';

const ToObject = argument => {
  if (argument == null) {
    throw new TypeError(`Cannot convert ${argument} to object`);
  }
  return Object(argument);
}
export default ToObject;
