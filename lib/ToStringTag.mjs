import ObjectToString from '#primordials/ObjectToString';
import StringSlice from '#primordials/StringSlice';

const ToStringTag = argument => {
  const string = ObjectToString(argument);
  return StringSlice(string, 8, -1);
}

export default ToStringTag;
