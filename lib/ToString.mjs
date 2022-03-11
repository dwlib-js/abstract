import {
  String,
  TypeError
} from '#primordials';
import ToPrimitive from './ToPrimitive.mjs';

const ToString = argument => {
  const string = ToPrimitive(argument, 'string');
  const type = typeof string;
  if (type === 'string') {
    return string;
  }
  if (type === 'symbol') {
    throw new TypeError('Cannot convert symbol to string');
  }
  return String(string);
}
export default ToString;
