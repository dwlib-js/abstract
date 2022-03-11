import {
  BigInt,
  TypeError
} from '#primordials';
import ToPrimitive from './ToPrimitive.mjs';

const ToBigInt = argument => {
  const value = ToPrimitive(argument, 'number');
  const type = typeof value;
  if (type === 'bigint') {
    return value;
  }
  if (value == null || type === 'number' || type === 'symbol') {
    throw new TypeError(`Cannot convert ${value != null ? type : value} to bigint`);
  }
  return BigInt(value);
}
export default ToBigInt;
