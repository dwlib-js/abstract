import {
  Number,
  TypeError
} from '#primordials';
import ToPrimitive from './ToPrimitive.mjs';

const ToNumber = argument => {
  const value = ToPrimitive(argument, 'number');
  const type = typeof value;
  if (type === 'number') {
    return value;
  }
  if (type === 'symbol' || type === 'bigint') {
    throw new TypeError(`Cannot convert ${type} to number`);
  }
  return Number(value);
}
export default ToNumber;
