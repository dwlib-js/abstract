import {
  ObjectToString,
  StringSlice
} from '#primordials';

const ToStringTag = argument => {
  const string = ObjectToString(argument);
  return StringSlice(string, 8, -1);
}
export default ToStringTag;
